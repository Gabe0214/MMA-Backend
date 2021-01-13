const { json } = require('body-parser');
const express = require('express');
const users = require('./usersModel');
const router = express.Router();

router.get('/', async (req, res) => {
	try {
		const allUsers = await users.getAllUsers;
		res.status(200).json(allUsers);
	} catch (err) {
		console.log(err);
		res.status(500), json({ message: 'something went wrong with the server' });
	}
});

module.exports = router;
