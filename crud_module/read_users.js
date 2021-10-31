//!NodeJS Module - readUsers:
const fs = require("fs");

const readUsers = async () => {
    try {
        const stringUsers = await fs.promises.readFile(
            'users.json',
            { encoding: 'utf-8' },
        );
        const usersRead = JSON.parse(stringUsers);
        console.log(usersRead);
    } catch (err) {
        throw err;
    }
}

module.exports = readUsers;