const fs = require('fs/promises')
// const contacts = require('./contacts.json')
const path = require('path');
const shortid = require('shortid');

const contactsPath = path.join(__dirname, 'contacts.json');



const listContacts = async () => {
try {
  const data = await fs.readFile(contactsPath, 'utf-8')
  return JSON.parse(data)
} catch (error) {
  throw error
}
  
};

const getContactById = async (contactId) => {    
    const numberId = Number(contactId)
    const data = await listContacts()
    const oneContact = data.find(
      (contact) => contact.id === numberId
    );
    return oneContact;
  };

const removeContact = async (contactId) => {
  // const numberId = Number(contactId)
    const data = await listContacts()
    const filteredContacts = data.filter(
      (contact) => !contactId.include(contact.id)
    );
    try {
      fs.writeFile(contactsPath, `${JSON.stringify(filteredContacts)}`, (err) => {
        throw err
      })
    } catch (error) {
      console.log(error)
    }

    return filteredContacts;
};

const addContact = async (body) => {
  const contacts = await listContacts()

  const newContact = { ...body, id: shortid.generate() }
  const result = [...contacts, newContact]

  try {
    fs.writeFile(contactsPath, `${JSON.stringify(result)}`, (err) => {
      throw err
    })
  } catch (error) {
    console.log(error)
  }

  return newContact
}


const updateContact = async (contactId, body) => {};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
