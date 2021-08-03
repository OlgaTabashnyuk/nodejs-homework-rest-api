const path = require('path');
const fs = require('fs').promises;
const { user: service } = require('../../services');

const tempDir = path.join(process.cwd(), 'temp');
const uploadDir = path.join(process.cwd(), 'upload');
const Jimp = require('jimp');

const updateAvatar = async (req, res, next) => {
  if (!req.file) {
    return res.status(404).json({
      status: 'error',
      code: 404,
      message: 'file not found',
    });
  }
  const { path: tempName, originalname } = req.file;
  const { _id } = req.user;
  const userFolder = _id.toString();
  const userDirectory = path.join(uploadDir, userFolder);

  try {
    await fs.mkdir(userDirectory);
    const fileName = path.join(userDirectory, originalname);

    fs.rename(tempName, fileName);

    Jimp.read(`${fileName}`, (err, image) => {
      if (err) throw err;
      image
        .resize(250, 250) // resize
        .write(`${fileName}`); // save
    });
    const newUser = {
      avatarURL: fileName,
    };

    await service.updateById(_id, { avatarURL: newUser.avatarURL });
    res.status(201).json({
      status: 'success',
      code: 201,
      data: { result: newUser },
    });
  } catch (error) {
    fs.unlink(tempName);
    // console.log(error.message);
  }
};

module.exports = updateAvatar;
