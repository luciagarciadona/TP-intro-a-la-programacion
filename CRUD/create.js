const read = require('./read.js');
const write = require('./write.js');

const create = (titulo, autor, genero, año, compra, venta) => {
    let array=read()
    let ultimoLibro = array[array.length-1]; 
    const nuevoLibro = {
        id: array.length > 0 ? ultimoLibro.id +1 : 1,
        title: titulo,
        author: autor,
        genre: genero,
        year: año,
        cost: compra,
        price: venta
    };

    array.push(nuevoLibro);
    write(array);
}

module.exports = create;