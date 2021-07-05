const {addContact} = require('../../model')
// const contacts = require('../../model')
const addNewContact = async (req, res, next) => {
    //  console.log("req.body", req.body);
        try {
        const newContact = await addContact(req.body)
        // console.log(newContact);
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