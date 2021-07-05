const {removeContact} = require('../../model')

const deleteContact = async (req, res, next) => {
    const {contactId} = req.params;
        const filteredContacts = await removeContact(contactId)
        console.log(filteredContacts);

    res.json({
        status: "success in removing contact",
        code: 200,
        data: {
            result: filteredContacts
        }
    })
}

module.exports = deleteContact;