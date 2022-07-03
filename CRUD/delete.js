const read = require('./read.js');
const write = require('./write.js');

const eliminarLibro = id => {
    let arrayLibros = read();
    write (arrayLibros.filter(arrayLibros => arrayLibros.id != id));
};

module.exports = eliminarLibro;