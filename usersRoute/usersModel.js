const db = require('../database/dbConfing');

module.export = {
	getAllUsers
};

function getAllUsers() {
	return db('users as u').select('*').orderBy('u.user_id');
}
