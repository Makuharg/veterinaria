const fs = require('fs');


// registramos en citas.json

const registrar = (nombre, edad, animal, color, enfermedad) => {
    // primero leemos que tenemos en el archivo citas.json y lo pasamos a array
    const citas = JSON.parse(fs.readFileSync('./citas.json', 'utf-8')); 

    const nuevaCita = {
        nombre,
        edad,
        animal,
        color,
        enfermedad
    };

    // insertamos la nuevacita en el arreglo anterior
    citas.push(nuevaCita);

    // creamos o registramos nueva cita con FileSystem y convertimos a string el arreglo
    fs.writeFileSync('./citas.json', JSON.stringify(citas));
    console.log('Cita registrada con exito');
}

// Leemos el arreglo que tenemos en citas.json

const leer = () => {
    // Para leer el archivo json tenemos que parsearlo para que vuelva a ser un array
    const citas = JSON.parse(fs.readFileSync('./citas.json', 'utf-8'));

    console.log(citas);
}


// exportamos modulos, en este caso 2 funciones, registrar y leer
module.exports = {
    registrar, leer
}