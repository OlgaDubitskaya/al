const { sendToTelegram } = require("../utils")

const matcher = {
    userName: "Имя",
    phoneNumber: "Номер телефона",
    model: "Модель",
    marka: "Марка",
    engine: "Тип двигателя",
    volume: "Объем",
    transmission: "Коробка передач",
    year: "Год выпуска",
    mileage: "Пробег",
    cost: "Цена",
    description: "Описание",
}

const createBuyoutOrder = async (req, res) => {
    try {
        const dataToSend = Object.entries(req.body).reduce((str, [key, value], index) => 
            value? `${str}, ${matcher[key]}: ${value}` : str, 'Выкуп авто') 

            await sendToTelegram(dataToSend)

        return res.status(200).json({ massage: "Successfully" })
    } catch (error) {
        return res.status(500).json(error)
    }
}
module.exports = {
    createBuyoutOrder,
}