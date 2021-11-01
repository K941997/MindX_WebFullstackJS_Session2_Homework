//!NodeJS Module - readUser:
const fs = require('fs');

const readUser = async (idUser) => {
    try {
        const stringUsers = await fs.promises.readFile(
            'users.json',
            {encoding: 'utf-8'},
        );
        const usersRead = JSON.parse(stringUsers);
        const user = usersRead.find(obj => obj.id == idUser);

        console.log (user);
        return user;

    } catch (err){
        console.log(err);
        throw err;
    }
}

module.exports = readUser;