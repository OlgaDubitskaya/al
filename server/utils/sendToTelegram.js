const axios = require('axios')

const send = async (chat_id, message, url) => {
    const res = await axios({
        method: 'post',
        url,
        data: {
            chat_id,
            text: message
        }
      })
    console.log("res", res)
} 

const sendToTelegram = async (message) => {
    const {
        TOKEN_NUMBER, CHAT_ID
    } = process.env
    console.log({TOKEN_NUMBER, CHAT_ID, message})
    const url = `https://api.telegram.org/bot${TOKEN_NUMBER}/sendMessage`

    const promises = CHAT_ID.split(",").map((chat_id) => send(chat_id, message, url))
    await Promise.allSettled(promises)
}

module.exports = {  
    sendToTelegram
}