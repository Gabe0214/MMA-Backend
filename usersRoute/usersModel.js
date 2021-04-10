const db = require('../database/dbConfing');

module.exports = {
	getAllUsers,
	insertUser,
	getUserByID,
	deleteUserById,
	findUserbyEmail,
	editUser,
	findUserByUsername
};

function getAllUsers() {
	return db('users as u').select('*').orderBy('u.user_id');
}

async function insertUser(user) {
	return await db('users as u').insert(user, 'u.user_id').then(([ id ]) => {
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

async function editUser(id, changes) {
	await db('users as u').where('u.user_id', id).update(changes);
	return getUserByID(id);
}

function findUserByUsername(username) {
	return db('users as u').select('u.username').where('u.username', username).first();
}
