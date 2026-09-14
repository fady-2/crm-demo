const fs = require('fs');
const path = require('path');
const { validateItem } = require('../models/item.model');

const dataPath = path.join(__dirname, '../data/items.json');

const readData = () => {
  const data = fs.readFileSync(dataPath, 'utf-8');
  return JSON.parse(data);
};

const writeData = (data) => {
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
};

// GET all
exports.getAll = (req, res) => {
  const items = readData();
  res.json(items); // ✅ بيرجع array مباشرة
};

// GET one
exports.getOne = (req, res) => {
  const items = readData();
  const item = items.find((i) => i.id === parseInt(req.params.id));

  if (!item) {
    return res.status(404).json({ message: 'Not found' });
  }

  res.json(item); // ✅ بيرجع object مباشرة
};

// POST create
exports.create = (req, res) => {
  const errors = validateItem(req.body);
  if (errors.length > 0) {
    return res.status(400).json({ errors });
  }

  const items = readData();
  const newItem = {
    id: items.length > 0 ? Math.max(...items.map((i) => i.id)) + 1 : 1,
    ...req.body,
    createdAt: new Date().toISOString(),
  };

  items.push(newItem);
  writeData(items);

  res.status(201).json({ message: 'Created successfully!' }); // ✅
};

// PUT update
exports.update = (req, res) => {
  const items = readData();
  const index = items.findIndex((i) => i.id === parseInt(req.params.id));

  if (index === -1) {
    return res.status(404).json({ message: 'Not found' });
  }

  items[index] = { ...items[index], ...req.body };
  writeData(items);

  res.json(items[index]); // ✅
};

// DELETE
exports.remove = (req, res) => {
  const items = readData();
  const filtered = items.filter((i) => i.id !== parseInt(req.params.id));

  if (filtered.length === items.length) {
    return res.status(404).json({ message: 'Not found' });
  }

  writeData(filtered);
  res.json({ message: 'Deleted successfully' }); // ✅
};
