const Users = require('../usersRoute/usersModel');

async function verifyUserByID(req, res, next) {
	const { id } = req.params;

	const user = await Users.getUserByID(id);
	if (user) {
		req.user_id = user.user_id;
		next();
	} else {
		res.status(404).json({ message: 'user does not exist' });
	}
}

function verifyBody(req, res, next) {
	if (req.body != {}) {
		next();
	} else {
		res.status(401).json({ message: 'please insert field(s).' });
	}
}

module.exports = {
	verifyUserByID,
	verifyBody
};
