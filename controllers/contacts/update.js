const { Contact } = require('../../utils/models');

const update = async (req, res, next) => {
  const { body } = req;
  const { contactId } = req.params;

  try {
    const result = await Contact.findByIdAndUpdate(contactId, body, {
      new: true,
    });
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

module.exports = update;
