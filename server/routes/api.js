const express = require('express')
const router = express.Router()
const { authenticate } = require("../middleware/authenticate");

const { createBuyoutOrder } = require('../controllers/buyout-order')
const { createSelectionOrder } = require('../controllers/selection-order')

router.post('/order/buyout/create', createBuyoutOrder)
router.post('/order/selection/create', createSelectionOrder)

module.exports = router