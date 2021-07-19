const { Contact } = require('../../utils/models');

const updateStatusContact = async (req, res, next) => {
  const { body } = req;
  const { contactId } = req.params;

  try {
    const result = await Contact.findByIdAndUpdate(contactId, body, {
      new: true,
    });
    if (!result) {
      res.json({
        status: 'error',
        code: 400,
        message: 'missing field "favorite"',
      });
    }
    res.json({
      status: 'success',
      code: 200,
      data: {
        result,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = updateStatusContact;
