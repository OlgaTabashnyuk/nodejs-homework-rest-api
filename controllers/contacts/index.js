const getAll = require('./getAll')
const getById = require('./getById')
const addNewContact = require('./add')
const deleteContact = require('./remove')
const update = require('./update')


module.exports = {
    getAll, 
    getById,
    addNewContact,
    deleteContact,
    update
}