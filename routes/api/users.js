const express = require('express');

const { authenticate } = require('../../middlewares');
const uploadMiddleware = require('../../middlewares/uploadMiddleware');
const { users: ctrl } = require('../../controllers');
const { auth: ctrlAuth } = require('../../controllers');

const router = express.Router();

router.get('/profile', authenticate, ctrl.getProfile);
router.post(
  '/avatar',
  authenticate,
  uploadMiddleware.single('avatar'),
  ctrlAuth.updateAvatar,
);

module.exports = router;
