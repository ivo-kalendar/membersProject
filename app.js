
const express = require('express')
const app = express()

let members = [{
	id: 1,
	name: 'Member No. 1',
	email: 'adress1@email.com',
	status: 'active'
},{
	id: 2,
	name: 'Member No. 2',
	email: 'adress2@email.com',
	status: 'active'
},{
	id: 3,
	name: 'Member No. 3',
	email: 'adress3@email.com',
	status: 'active'
}]

let port = process.env.PORT || 3000
app.listen(port, console.log(`Started on port: ${port}...`))

app.get('/', (req,res) => {
	res.send('hello')
})

app.get('/api/members', (req,res) => {
	res.json(members)
})
// console.log('Hello from the Members')