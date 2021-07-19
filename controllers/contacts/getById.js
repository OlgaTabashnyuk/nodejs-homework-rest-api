const { Contact } = require('../../utils/models');

const getById = async (req, res, next) => {
  const { contactId } = req.params;
  try {
    const result = await Contact.findById(contactId);
    console.log(result);

    res.json({
      message: 'success',
      code: 200,
      data: {
        result,
      },
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = getById;
