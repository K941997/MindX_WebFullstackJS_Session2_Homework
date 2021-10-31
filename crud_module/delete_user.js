const fs = require("fs");

const deleteUser = async (idUser) => {
    try {
        const stringUsers = await fs.promises.readFile("users.json", {
          encoding: "utf-8",
        });
        const usersRead = JSON.parse(stringUsers);
        
        const usersReadNoDeleteUser = usersRead.filter((obj) => obj.id != idUser);

        fs.promises.writeFile("users.json", JSON.stringify(usersReadNoDeleteUser));
        console.log(usersReadNoDeleteUser);

      } catch (error) {
        console.log(error);
      }
}

module.exports = deleteUser;