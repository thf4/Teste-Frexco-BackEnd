const jwt = require("jsonwebtoken");
const secret = require("../Config/secret.json");

const auth = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, secret.secret);
    const userId = decodedToken.id;
    if (!userId) {
      throw "Invalid user ID";
    } else {
      next();
    }
  } catch {
    return res.status(401).json({
      message: "Invalid request!",
    });
  }
};

module.exports = auth;