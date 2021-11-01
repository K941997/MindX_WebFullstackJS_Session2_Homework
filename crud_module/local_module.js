//!Sử dụng tất cả Module:
const addUser = require('./add_user'); //module addUser
const readUsers = require('./read_users'); //module readUsers
const readUser = require('./read_user');
const updateUser = require('./update_user');
const deleteUser = require('./delete_user');


// readUsers();
// addUser({ username: 'iiiiiiiii', password: '1232343534'});
// readUser(2);
updateUser(2, { username: 'bcs', password: '99999'});
// deleteUser(1);

