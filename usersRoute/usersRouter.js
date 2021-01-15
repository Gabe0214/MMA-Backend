const express = require('express');

const users = require('./usersModel');
const router = express.Router();
const { verifyUserByID, verifyBody } = require('../middleware/usersMiddleware');
router.get('/', async (req, res) => {
	try {
		const allUsers = await users.getAllUsers();
		res.status(200).json(allUsers);
	} catch (err) {
		console.log(err);
		res.status(500).json({ message: 'something went wrong with the server' });
	}
});

router.put('/user/:id', verifyUserByID, verifyBody, async (req, res) => {
	try {
		const changedUser = await users.editUser(req.user_id, req.body);
		res.status(201).json(changedUser);
	} catch (err) {
		console.log(err);
		res.status(500).json({ message: 'something went wrong with the server' });
	}
});

router.delete('/user/:id', async (req, res) => {
	const { id } = req.params;

	try {
		await users.deleteUserById(id);
		res.status(201).json({ message: 'User sucessfully deleted' });
	} catch (err) {
		console.log(err);
		res.status(500).json({ message: 'something happened to the server' });
	}
});

module.exports = router;
