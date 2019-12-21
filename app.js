
const express = require('express')
const app = express()
let members = require('./apis/members')

app.use(express.static('public'))

let port = process.env.PORT || 3000
app.listen(port, console.log(`Started on port: ${port}...`))

app.get('/', (req,res) => {
	res.sendFile('index.html')
})

app.get('/api/members', (req,res) => {
	res.json(members)
})
// console.log('Hello from the Members')