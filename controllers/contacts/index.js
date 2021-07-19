const getAll = require('./getAll');
const getById = require('./getById');
const addNewContact = require('./add');
const deleteContact = require('./remove');
const update = require('./update');
const updateStatusContact = require('./updateStatusContact');

module.exports = {
  getAll,
  getById,
  addNewContact,
  deleteContact,
  update,
  updateStatusContact,
};
