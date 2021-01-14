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

module.exports = {
	verifyUser
};
