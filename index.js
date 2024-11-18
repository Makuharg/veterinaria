const fs = require('fs'); // importamos libreria de File System
const { registrar, leer } = require('./operaciones.js');

const [operacion, nombre, edad, animal, color, enfermedad] = process.argv.slice(2);

if (operacion === "registrar") {
    registrar(nombre, edad, animal, color, enfermedad);
} else if  (operacion === "leer") {
    leer();
} else {
    console.log("No ingresaste bien la operacion, vuelva a intentarlo")
}



