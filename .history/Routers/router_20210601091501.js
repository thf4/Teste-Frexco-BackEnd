const express = require("express");
const router = express.Router();

/* Home */
router.get("/", (req, res) => {
  return res.json({ message: "Hello word" });
});

/* Login */
router.post("/login", (req, res) => {
  return res.json({ message: "Hello word" });
});

/* Cadastrar */
router.post("/cadastrar", (req, res) => {
  return res.json({ message: "Hello word" });
});

/* Recieve users data */
router.get("/cadastrar", (req, res) => {
  return res.json({ message: "Hello word" });
});
module.exports = (app) => app.use("/", router);