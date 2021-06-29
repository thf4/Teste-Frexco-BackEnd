const mongoose = require("mongoose");
require("dotenv").config();
console.log(`mongodb://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@${process.env.MONGODB}/Frexco`)
mongoose.connect(`mongodb://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@${process.env.MONGODB}/Frexco`, {
 useNewUrlParser: true,
 useUnifiedTopology: true,
});

module.exports = mongoose;
