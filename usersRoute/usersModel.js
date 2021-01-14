const db = require('../database/dbConfing');

module.exports = {
	getAllUsers,
	insertUser,
	getUserByID,
	deleteUserById,
	findUserbyEmail
};

function getAllUsers() {
	return db('users as u').select('*').orderBy('u.user_id');
}

function insertUser(user) {
	return db('users as u').insert(user, 'u.user_id').then(([ id ]) => {
		return getUserByID(id);
	});
}

function getUserByID(id) {
	return db('users as u').select('*').where('u.user_id', id).first();
}

function deleteUserById(id) {
	return db('users as u').where('u.user_id', id).del();
}

function findUserbyEmail(email) {
	return db('users as u').select('*').where('u.email', email).first();
}
