const express = require('express');
const { auth: ctrl } = require('../../controllers');
const { authenticate } = require('../../middlewares');
const router = express.Router();

router.post('/register', express.json(), ctrl.register);
router.post('/login', express.json(), ctrl.login);
router.get('/logout', authenticate, ctrl.logout);
router.get('/verify/:verifyCode', ctrl.verify);

module.exports = router;
