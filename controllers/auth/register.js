const { user: service } = require('../../services');

const register = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const result = await service.getOne({ email });
    console.log('result', result);
    if (result) {
      res.status(409).json({
        status: 'error',
        code: 409,
        message: 'Already registered',
      });
      return;
    }

    await service.add({ email, password });
    res.status(201).json({
      status: 'success',
      code: 201,
      message: 'successfully added to database',
    });
  } catch (error) {
    next(error);
  }
};
module.exports = register;
