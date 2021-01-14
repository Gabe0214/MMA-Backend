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

router.post('/login', async (req, res) => {
	const { email, password } = req.body;

	try {
		const user = await users.findUserbyEmail(email);
		if (user && bcrypt.compareSync(password, user.password)) {
			const token = singIn(user);
			res.status(201).json({ token });
		} else {
			res.status(401).json({ message: 'Invalid email and/or password' });
		}
	} catch (err) {
		console.log(err);
		res.status(500).json({ message: 'Something went wrong with the server' });
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

	const options = {
		expiresIn: '1d'
	};

	return jwt.sign(payload, process.env.JWT_SECRET, options);
}

module.exports = router;
