const express = require("express");
const router = express.Router();
const Cart = require("../Models/cart");

router.post("/cart/:_id", async (req, res) => {
  const { body = {} } = req;
  const { address, cpf } = body;
  const { _id, name } = req.params;
  try {
    const response = await Cart.create(
      { _id, name: name, ...product },
      { address, cpf }
    );
    response.save();
    return res.status(201).json(response);
  } catch (err) {
    return res.status(401).json({ message: "Erro ao criar carrinho!" });
  }
});

module.exports = router;