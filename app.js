
const express = require('express')
const app = express()

const logger = require('./middleware/logger')

// app.use(express.static('public'))
app.use(logger)
app.use('/', require('./router'))




const port = process.env.PORT || 3000
app.listen(port, console.log(`Started on port: ${port}...`))