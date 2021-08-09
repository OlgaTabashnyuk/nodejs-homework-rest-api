const { user: service } = require('../../services');

const verify = async (req, res, next) => {
  const { verifyCode } = req.params;
  try {
    const user = await service.getOne({ verifyCode });
    if (!user) {
      return res.status(400).json({
        status: 'error',
        code: 400,
        message: 'Код верификации устарел',
      });
    }
    await service.updateById(user._id, { verify: true, verifyCode: '' });
    res.json({
      status: 'success',
      code: 200,
      message: 'Почта подтверждена,  спасибо!',
    });
  } catch (error) {
    next(error);
  }
};
module.exports = verify;
