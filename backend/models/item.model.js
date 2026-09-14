// التحقق من البيانات قبل الحفظ
const validateItem = (data) => {
  const errors = [];

  if (!data.name) errors.push('name is required');
  if (!data.email) errors.push('email is required');
  if (!data.phone) errors.push('phone is required');
  if (!data.projectId) errors.push('projectId is required');

  return errors;
};

module.exports = { validateItem };