const express = require("express");
const Product = require('../models/product')
router = express.Router();
router.get('/products', async (req, res) => {
  const products = await Product.find({})
  res.json(products)
})

router.get('/products/:id', async (req, res) => {
  const { id } = req.params

  try {
    const product = await Product.findById(id)
    res.json(product)
  } catch (error) {
    res.status(400).json(error)
  }
})

router.post('/products', async (req, res) => {
  const payload = req.body
  try {
    const product = new Product(payload)
    await product.save()
    res.status(201).end()
  } catch (error) {
    res.status(400).json(error)
  }
})

router.put('/products/:id', async (req, res) => {
  const payload = req.body
  const { id } = req.params

  try {
    const product = await Product.findByIdAndUpdate(id, { $set: payload })
    res.json(product)
  } catch (error) {
    res.status(400).json(error)
  }
})

router.delete('/products/:id', async (req, res) => {
  const { id } = req.params

  try {
    await Product.findByIdAndDelete(id)
    res.status(204).end()
  } catch (error) {
    res.status(400).json(error)
  }
})

module.exports = router