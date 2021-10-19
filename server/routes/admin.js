const express = require('express')
const router = express.Router()
const { authenticate } = require("../middleware/authenticate");

const { createUser, loginUser, checkUser, logoutUser, getUsers, deleteUser } = require('../controllers/user')
const { getBuyoutOrders, deleteBuyoutOrder } = require("../controllers/buyout-order")
const { getSelectionOrders, deleteSelectionOrder } = require("../controllers/selection-order")

router.post('/user/create', createUser)
router.post('/user/login', loginUser)
router.post('/user/check', authenticate, checkUser)
router.post('/user/logout', logoutUser)
router.get('/users', getUsers)
router.delete('/user', deleteUser)

router.get('/order/buyoutorders', getBuyoutOrders)
router.delete('/buyoutorder', deleteBuyoutOrder)

router.get('/order/selectionorders', getSelectionOrders)
router.delete('/selectionorder', deleteSelectionOrder)

module.exports = router
