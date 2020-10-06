const fs = require('fs');

let listadoPorHacer = [];

const guardaDB = () => {

  let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('db/data.json', data, (err) => {
      if (err) throw err;
      console.log('los datos fueron guardados exitosamente!');
    });

}

const cargarDB = () => {
  try {
    listadoPorHacer = require('../db/data.json')
  } catch (error) {
    listadoPorHacer= [];
  }
  
  
} 

const crear = (descripcion) => {

  cargarDB();

  let porHacer = {
    descripcion,
    completado: false
  };

  listadoPorHacer.push(porHacer)
  guardaDB()

  return porHacer;
}

let getListado = () => {
  cargarDB();
  return listadoPorHacer
}

const actualizar = (descripcion, completado = true) => {

  cargarDB();

  let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion)

  if(index >= 0) {
    listadoPorHacer[index].completado = completado;
    guardaDB();
    return true;
  }else {
    return false
  }
}

const borrar = (descripcion) => {
  
  cargarDB();

  const indice = listadoPorHacer.findIndex(borrar => borrar.descripcion === descripcion)
  
  if(indice >= 0) {
    listadoPorHacer.splice(indice, 1)
    guardaDB();
    return true;
  }else {
    return false
  }

}

module.exports = {
  crear,
  getListado,
  actualizar,
  borrar
}