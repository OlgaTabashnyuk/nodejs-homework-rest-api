const {updateContact} = require('../../model')

const contacts = require('../../model/contacts.json')

const update = async (req, res, next) => {
    const body = req.body
    const {contactId} = req.params
 try {
    const newContact = await updateContact(contactId, body)
    if(newContact === -1) {
        res.json({
            status: "error",
            code: 404,
            message: "Not found"
        })
        return;
    }
    res.json({
        status: "success",
        code: 200,
        data: {
            result: newContact
        }
    })

} catch (error) {
    console.log(error);
}  
}

module.exports = update;