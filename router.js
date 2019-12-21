
const express = require('express')
const router = express.Router()
const members = require('./api/Members')




router.get('/', (req,res) => res.send('hello world'))

router.get('/api/testMembers', (req, res) => {
	res.send(`  ${new Date()}  -  ${req.protocol}://${req.get('host')}${req.originalUrl}`)
})

router.get('/api/members', (req, res) => res.json(members))

router.get('/api/members/:id', (req, res) => {
	const found = members.some(member => member.id === parseInt(req.params.id))

	if (found) {
		res.json(members.filter(member => member.id === parseInt(req.params.id)))
	} else {
		res.status(400).json({ msg: `There are no compatible member with an id of ${req.params.id}` })
	}
})



module.exports = router