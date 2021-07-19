const { Contact } = require('../../utils/models');

const deleteContact = async (req, res, next) => {
  const { contactId } = req.params;
  try {
    const filteredContacts = await Contact.findByIdAndDelete(contactId);
    if (filteredContacts) {
      res.json({
        status: 'success',
        code: 200,
        message: 'contact deleted',
      });
    } else {
      res.status(200).json({
        status: 'success',
        code: 200,
        message: 'No Content',
      });
    }
  } catch (error) {
    next(error);
  }
};
module.exports = deleteContact;
