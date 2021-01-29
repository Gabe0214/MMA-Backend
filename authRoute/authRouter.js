const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const users = require('../usersRoute/usersModel');
const { verifyUser, verifyUserFields } = require('../middleware/registrationMiddleware');
const router = express.Router();

router.post('/signup', verifyUserFields, async (req, res) => {
	const user = req.body;

	const hashPassword = bcrypt.hashSync(user.password, 10);

	user.password = hashPassword;

	try {
		const newUser = await users.insertUser(user);
		res.status(201).json(newUser);
	} catch (err) {
		console.log(err);
		res.status(500).json({ message: 'something happened to the server' });
	}
});

router.post('/login', verifyUser, (req, res) => {
	const { password } = req.body;
	const { user } = req;
	if (user && bcrypt.compareSync(password, user.password)) {
		const token = singIn(user);
		const { user_id, firstname, lastname, username, zip, adress, adress_2, city, state } = user;
		const userData = { user_id, username, firstname, lastname, state, city, zip, adress, adress_2 };
		res.status(201).json({ user: userData, token });
	} else {
		res.status(401).json({ message: 'Invalid email and/or password' });
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
