const { nanoid } = require('nanoid');
const gravatar = require('gravatar');
const { sendMail } = require('../../utils');
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
    const verifyCode = nanoid();
    const avatarURL = gravatar.url(email);

    await service.add({ email, password, avatarURL, verifyCode });
    const mail = {
      to: email,
      subject: 'Подтвердите свой email',
      text: `<a href="http://localhost:3000/api/auth/users/verify/${verifyCode}"> Follow the link to verify your email </a>`,
    };
    await sendMail(mail);
    res.status(201).json({
      status: 'success',
      code: 201,
      message: 'successfully registered in database. email verified',
    });
  } catch (error) {
    next(error);
  }
};
module.exports = register;
