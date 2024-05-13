const mongoose = require("mongoose");

const { Schema } = mongoose;

const { serviceSchema } = require("./Service");

const cadSchema = new Schema(
  {
    nome: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    confirmPassword: {
      type: String,
      required: true,
    },
    services: {
      type: [serviceSchema],
    },
  },
  { timestamps: true }
);

const Modal = mongoose.model("modal", cadSchema);

module.exports = Modal;
