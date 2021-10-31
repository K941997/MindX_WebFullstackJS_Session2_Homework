//!NodeJS Module - fs.writeFile:
const fs = require('fs');   

const users = [
    { id: 1, username: 'tuan', password: '123456'},
    { id: 2, username: 'binh', password: '123456'},
    { id: 3, username: 'ha', password: '123456'},
    { id: 4, username: 'khanh', password: '123456'},
    { id: 5, username: 'lam', password: '123456'},
    { id: 6, username: 'hung', password: '123456'},
]

fs.writeFile(
    'users.json',
    JSON.stringify(users),
    (err) => {
        console.log(err);
    }
)
