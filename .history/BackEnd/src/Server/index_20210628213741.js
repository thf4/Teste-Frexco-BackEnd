const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(
 `mongodb://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@${process.env.MONGODB}/Frexco?authSource=admin`,
 {
  useNewUrlParser: true,
 },
);

module.exports = mongoose;
