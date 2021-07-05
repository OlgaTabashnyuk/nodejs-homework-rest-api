const getAll = require('./getAll')
const getById = require('./getById')
const addNewContact = require('./add')
const deleteContact = require('./remove')
// const removeContact = require('./removeContact')

module.exports = {
    getAll, 
    getById,
    addNewContact,
    deleteContact,
}