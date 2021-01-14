const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const users = require('../usersRoute/usersModel');

const router = express.Router();

router.post('/signup', async (req, res) => {
	const user = req.body;

	const hashPassword = bcrypt.hashSync(user.password, 10);

	user.password = hashPassword;

	try {
		const newUser = await users.insertUser(user);
		// const token = singIn(newUser)
		res.status(201).json(newUser);
	} catch (err) {
		console.log(err);
		res.status(500).json({ message: 'something happened to the server' });
	}
});

function singIn(user) {
	const { firstname, lastname, email, zip, city, state } = user;
	const payload = {
		firstname,
		lastname,
		email,
		zip,
		city,
		state
	};

	const option = {
		expires: '1d'
	};

	return jwt.sign(payload, process.env.JWT_SECRET, option);
}

module.exports = router;
