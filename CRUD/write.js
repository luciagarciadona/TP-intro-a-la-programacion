const fs = require ('fs')

function write (libros){
    return fs.writeFileSync("librosDataBase.json", JSON.stringify(libros, null, 4),'utf-8');
}

module.exports = write