const express = require("express")
const bodyParser = require("body-parser")
const path = require("path")
const cors = require("cors")
const https = require("https")
const http = require("http")
const fs = require('fs')
const dotenv = require("dotenv")
const mongoose = require('mongoose')
const cookieParser = require("cookie-parser");

dotenv.config({ path: ".env" })

const { DB_URI } = process.env

mongoose
  .connect(DB_URI)
  .then(
    () => console.log("Connected to mongoDB"),
    err => console.log("Error connecting to mongoDB", err)
  )

const app = express()
app.use(cookieParser())
app.use(bodyParser.json({ limit: "10mb" }))
app.use(bodyParser.urlencoded({
	limit: "10mb",
	extended: true
}))
app.use(cors())

// routes
app.use("/api/admin", require("./routes/admin"))
app.use("/api", require("./routes/api"))

app.use(express.static(path.join(__dirname, "/../build")))
app.get("*", (req, res) => {
	res.sendFile(path.join(`${__dirname}/../build/index.html`))
})
const credentials = {
  cert: fs.readFileSync(process.env.SSL_CRT_PATH).toString(),
  key: fs.readFileSync(process.env.SSL_KEY_PATH).toString()
}
https.createServer(credentials, app).listen(443, "localhost", () => console.log(`Listening on https`))

http.createServer((req, res) => {
  res.writeHead(301, { "Location": "https://" + req.headers['host'] + req.url })
  res.end()
}).listen(80)