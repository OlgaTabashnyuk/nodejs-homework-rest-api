const {addContact} = require('../../model')
const contactSchema = require('../../utils/contactsSchema')

const addNewContact = async (req, res, next) => {
  const {error} = contactSchema.validate(req.body)
    if(error) {
      res.status(404).json({
      status: "error",
      code: 400,
      message: error.message
      })
      return;
  }
     console.log("req.body", req.body);
        try {
        const newContact = await addContact(req.body)
        console.log(newContact);
        res.json({
          status: 'success', 
          code: 201, 
          data: {
            result: newContact
          }
        })
        } catch (error) {
           next(error)
        }
        
    }


module.exports = addNewContact;