const read = require ('./read');
const write = require ('./write');

function organize (){ 
    let array=read();
    for (let i = 0; i < array.length; i++) {
        if (array[i].id) {
            array[i].id = i + 1
        }
    }
    write (array);
}

organize();

module.exports = organize