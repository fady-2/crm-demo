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
  res.json({ success: true, data: items });
};

// GET one
exports.getOne = (req, res) => {
  const items = readData();
  const item = items.find(i => i.id === parseInt(req.params.id));

  if (!item) {
    return res.status(404).json({ success: false, message: 'Not found' });
  }

  res.json({ success: true, data: item });
};

// POST create
exports.create = (req, res) => {
  const errors = validateItem(req.body);
  if (errors.length > 0) {
    return res.status(400).json({ success: false, errors });
  }

  const items = readData();

  const newItem = {
    id: items.length > 0 ? Math.max(...items.map(i => i.id)) + 1 : 1,
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    projectId: req.body.projectId,
    bua: req.body.bua || null,
    phase: req.body.phase || null,
    code: req.body.code || null,
    category: req.body.category || null,
    propertyType: req.body.propertyType || null,
    notes: req.body.notes || null,
    createdAt: new Date().toISOString()
  };

  items.push(newItem);
  writeData(items);

  res.status(201).json({ success: true, data: newItem });
};

// PUT update
exports.update = (req, res) => {
  const items = readData();
  const index = items.findIndex(i => i.id === parseInt(req.params.id));

  if (index === -1) {
    return res.status(404).json({ success: false, message: 'Not found' });
  }

  items[index] = {
    ...items[index],
    name: req.body.name ?? items[index].name,
    email: req.body.email ?? items[index].email,
    phone: req.body.phone ?? items[index].phone,
    projectId: req.body.projectId ?? items[index].projectId,
    bua: req.body.bua ?? items[index].bua,
    phase: req.body.phase ?? items[index].phase,
    code: req.body.code ?? items[index].code,
    category: req.body.category ?? items[index].category,
    propertyType: req.body.propertyType ?? items[index].propertyType,
    notes: req.body.notes ?? items[index].notes,
    updatedAt: new Date().toISOString()
  };

  writeData(items);
  res.json({ success: true, data: items[index] });
};

// DELETE
exports.remove = (req, res) => {
  const items = readData();
  const filtered = items.filter(i => i.id !== parseInt(req.params.id));

  if (filtered.length === items.length) {
    return res.status(404).json({ success: false, message: 'Not found' });
  }

  writeData(filtered);
  res.json({ success: true, message: 'Deleted successfully' });
};