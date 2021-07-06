const {removeContact} = require('../../model')

const deleteContact = async (req, res, next) => {
    try { 
    const {contactId} = req.params;
        const filteredContacts = await removeContact(contactId)
        console.log("filteredContacts", filteredContacts);
if(filteredContacts) {
     res.json({
        status: "success",
        code: 200,
        message:  "contact deleted"
    })
} else {
    res.status(200).json({
      status: 'success',
      code: 200,
      message: 'No Content'
    })
  }
}
catch (error) {
    next(error)
  }
}
module.exports = deleteContact;