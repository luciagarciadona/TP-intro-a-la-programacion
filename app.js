const read = require('./CRUD/read');
const create = require('./CRUD/create');
const update = require ('./CRUD/update');
const eliminarLibro=require ('./CRUD/delete');
const organize = require('./CRUD/organize');

let accion = process.argv[2];

switch (accion){

    case "read":
        organize(); //crea el JSON vacio en la primer ejecucion
        console.log("Lectura", read()); //o ("lectura", organize(), read());     
    break;

    case 'new': 
    console.log("Carga", create(process.argv[3], //titulo
                                process.argv[4], //autor
                                process.argv[5], //genero
                                process.argv[6], //año
                                process.argv[7], //costo
                                process.argv[8])); //precio
                           //organize();
    break;

    case 'delete': 
        console.log('Eliminado',eliminarLibro(process.argv[3])); //id
        organize();
    break;

    case 'update': 
        console.log('Actualizado',update(process.argv[3], //id
                                        process.argv[4],//titulo
                                        process.argv[5],//autor
                                        process.argv[6],//genero
                                        process.argv[7],//año
                                        process.argv[8],//costo
                                        process.argv[9]));//precio
        //organize();
    break;

    // case "list":
    //     console.log('Listado ordenado y actualizado',organize());
    //     console.log(read());
    // break;

    }