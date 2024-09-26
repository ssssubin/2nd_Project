const { Schema } = require('mongoose');

const guestSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    orderNumber: {
      type: Number,
      reqruied: true,
    },
  },
  {
    versionKey: false,
  },
);

module.exports = guestSchema;
