const {getContactById} = require('../../model')

const getById = async (req, res, next) => {
      const {contactId} = req.params;
    try {
      const oneContact = await getContactById(contactId)
    console.log(oneContact);
  
    if(!oneContact) {
      return res.status(404).json({
        status: "error",
        code: 404,
        message: `There is no contact with id ${contactId} `})
        
    }  
    res.json({ 
      message: "success",
      code: 200,
      data: {
        result: oneContact,
      }
    })
  } catch (error) {
    next (error)
  }
  }

  module.exports =  getById