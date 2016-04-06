module.exports = {
	findUser: findUser
};

var users = [
	{ id: 0, name: 'Brenden Eich' },
	{ id: 1, name: 'substack' },
	{ id: 2, name: 'Isaac Schlueter' },
	{ id_a: 2 }
];

function findUser(id, callback) {
	if (!id) {
		return callback('Missing ID');
	}

	var matchedUsers = users.filter(matchesId);
	return matchedUsers[0];

	function matchesId(user) {
		return user.id === id;
	}
}
