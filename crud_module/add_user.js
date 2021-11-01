//!NodeJS Module - addUser:
const fs = require('fs');

const addUser = async (user) => {
    try {
        const stringUsers = await fs.promises.readFile(
            'users.json',
            { encoding: 'utf-8' },
        );
        const usersRead = JSON.parse(stringUsers); //chuyển string -> array
        
        const usersReadAddOne = [ //addUser
            ...usersRead,
            { id: usersRead.length + 1, ...user }
        ];
        
        await fs.promises.writeFile('users.json', JSON.stringify(usersReadAddOne)) //chuyển array -> string

        console.log(usersReadAddOne);
        return usersReadAddOne;

    } catch (err) {
        console.log(err);
    }
}

//NodeJS export module add_user:
module.exports = addUser; 