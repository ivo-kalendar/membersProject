
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

router.post('/api/members', (req, res) => {
	const newMember = {
		id: 4,
		name: req.body.name,
		email: req.body.email,
		status: 'inactive'
	}

	if (!newMember.name || !newMember.email) {
		res.status(400).json({ msg: 'Please include name and email.' })
	} else {
		members.push(newMember)
		res.json(members)
	}

})


module.exports = router