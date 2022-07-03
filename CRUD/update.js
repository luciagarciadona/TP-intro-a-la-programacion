const read = require('./read');
const write = require('./write');
let arrayLibros = read();
const editarLibro = (id, titulo, autor, genero, año, costo, precio) => {

    const editedLibro = arrayLibros.map(arrayLibros => {

        if (arrayLibros.id == id) {
            arrayLibros.title = titulo;
            arrayLibros.author = autor;
            arrayLibros.genre = genero;
            arrayLibros.year = año;
            arrayLibros.cost = costo;
            arrayLibros.price = precio;
        }   
        return arrayLibros;
    });
    write(editedLibro);
}
editarLibro();
module.exports = editarLibro;





//ASI FUNCIONA ACA:
// const read = require('./read');
// const write = require('./write');
// let arrayLibros = read();
// const editarLibro = (id, titulo, autor, genero, año, costo, precio) => {

//     const editedLibro = arrayLibros.map(arrayLibros => {

//         if (arrayLibros.id == id) {
//             arrayLibros.title = titulo;
//             arrayLibros.author = autor;
//             arrayLibros.genre = genero;
//             arrayLibros.year = año;
//             arrayLibros.cost = costo;
//             arrayLibros.price = precio;
//         }        
//         return arrayLibros;
//     });
//     write(editedLibro);
// }
// editarLibro(2,"prueba","prueba","prueba","prueba","prueba","prueba");
// module.exports = editarLibro;