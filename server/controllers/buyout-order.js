const { BuyoutOrder } = require("../models")
const path = require('path')
const fs = require("fs")
const { v4 } = require("uuid")
const { sendToTelegram } = require("../utils")

const createBuyoutOrder = async (req, res) => {
    try {
        const {
            userName,
            phoneNumber,
            autoName,
            year,
            mileage,
            cost,
            images
        } = req.body

        const imagesPath = []
        images.forEach(i => {
            const uuid = v4()
            const doc = Buffer.from(i.thumbUrl.split(",")[1], 'base64')
            const name = `${uuid}_${i.name}`
            const filePath = path.join(`__dirname/../${process.env.PUBLIC_DIRECTORY}/images/buyout-photo/${name}`)
            fs.writeFile(filePath, doc, error => {
                if (error) {
                    return res.status(500).json({
                        error
                    })
                }
            })
            imagesPath.push(name)
        })

        const order = new BuyoutOrder({
            userName,
            phoneNumber,
            autoName,
            year,
            mileage,
            cost,
            images: imagesPath
        })
        await order.save()
        const sending = await sendToTelegram(`${userName}, ${phoneNumber}, Выкуп авто`)
        console.log("sending", sending)
        return res.status(200).json({ massage: "Successfully" })
    } catch (error) {
        console.log("error", error)
        return res.status(500).json(error)
    }
}
const deleteBuyoutOrder = async (req, res) => {
    try {
        
        const { id } = req.body
        console.log("req.body", id)
        await BuyoutOrder.deleteOne({ _id: id })
        return res.status(200).json({ massage: "Successfully" })
    } catch (error) {
        console.log("error", error)
        return res.status(500).json(error)
    }
}
const getBuyoutOrders = async (req, res) => {
    try {
        const { size = 25, page = 1 } = req.body
        const toSkip = page * size - size
        // const response = await BuyoutOrder.find().skip(toSkip).limit(size)
        const response = await BuyoutOrder.find().sort({ date: -1 })

        console.log("res", response)
        const orders = response.map(i => {
            return {
                key: i._id,
                userName: i.userName,
                phoneNumber: i.phoneNumber,
                autoName: i.autoName,
                year: i.year,
                mileage: i.mileage,
                cost: i.cost,
                images: i.images,
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
    createBuyoutOrder,
    getBuyoutOrders,
    deleteBuyoutOrder
}