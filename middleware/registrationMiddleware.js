const { compareSync } = require('bcryptjs');
const users = require('../usersRoute/usersModel');

async function verifyUser(req, res, next) {
	const { email } = req.body;

	const user = await users.findUserbyEmail(email);
	if (user) {
		req.user = user;
		next();
	} else {
		res.status(404).json({ message: 'user does not exist' });
	}
}

function verifyUserFields(req, res, next) {
	const { firstname, lastname, username, email, password, zip, city, state, adress } = req.body;

	if (!firstname || !lastname || !username || !email || !password || !zip || !city || !state || !adress) {
		res.status(401).json({ message: 'credentials are missing' });
	} else if (
		(firstname == '' || lastname == ' ' || username == '' || email == '' || password == '' || zip == ' ',
		city == ' ' || state == '' || adress == '')
	) {
		res.status(401).json({ message: 'fields cannot be empty' });
	} else {
		next();
	}
}

module.exports = {
	verifyUser,
	verifyUserFields
};
