const { Schema } = require('mongoose');
const contactSchema = Schema(
  {
    name: {
      type: String,
      minlength: [2, 'Name should contain at least 2 symbols '],
      required: [true, 'Set name for contact'],
    },
    email: {
      type: String,
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        'Enter a valid email address please',
      ],
      required: true,
    },
    phone: {
      type: String,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false, timestamps: true },
);

module.exports = contactSchema;
