const { SelectionOrder } = require("../models")
const { sendToTelegram } = require("../utils")

const createSelectionOrder = async (req, res) => {
    try {
        const {
            userName,
            phoneNumber
        } = req.body

        const order = new SelectionOrder({
            userName,
            phoneNumber
        })
        await order.save()
        const sending = await sendToTelegram(`${userName}, ${phoneNumber}, Разовый осмотр`)
        console.log("sending", sending)
        return res.status(200).json({ massage: "Successfully" })
    } catch (error) {
        console.log("error", error)
        return res.status(500).json(error)
    }
}
const deleteSelectionOrder = async (req, res) => {
    try {
        
        const { id } = req.body
        console.log("req.body", id)
        await SelectionOrder.deleteOne({ _id: id })
        return res.status(200).json({ massage: "Successfully" })
    } catch (error) {
        console.log("error", error)
        return res.status(500).json(error)
    }
}
const getSelectionOrders = async (req, res) => {
    try {
        const { size = 25, page = 1 } = req.body
        const toSkip = page * size - size
        const response = await SelectionOrder.find().sort({date: -1})
        console.log("res", response)
        const orders = response.map(i => {
            return {
                key: i._id,
                userName: i.userName,
                phoneNumber: i.phoneNumber,
                date: i.date
            }
        })

        res.status(200).json({
            orders
        })
    } catch (error) {
        res.status(500).json({
            error
        })
    }
}

module.exports = {
    createSelectionOrder,
    deleteSelectionOrder,
    getSelectionOrders
}