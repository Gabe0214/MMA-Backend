const jwt = require('jsonwebtoken');

function checkToken(req, res, next) {
	const token = req.headers.authorization;

	if (token) {
		jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
			if (err) {
				res.status(401).json({ message: 'cannot touch this' });
			} else {
				next();
			}
		});
	} else {
		res.status(401).json({ message: 'please insert token' });
	}
}

module.exports = {
	checkToken
};
