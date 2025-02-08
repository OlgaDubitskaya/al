const express = require('express')
const router = express.Router()

const { createBuyoutOrder } = require('../controllers/buyout-order')

router.post('/order/buyout/create', createBuyoutOrder)

module.exports = router