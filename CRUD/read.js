const fs = require ('fs');

function read (){
    if (fs.existsSync("librosDataBase.json") === false){
        fs.writeFileSync("librosDataBase.json", JSON.stringify([], null, 4));
        console.log("Se ha creado la base de datos.")
    }else{
        return (JSON.parse(fs.readFileSync("librosDataBase.json", "utf-8")))
    }
}
module.exports = read;