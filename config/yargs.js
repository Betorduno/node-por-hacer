const argv = require('yargs')
  .command('crear', 'crear un elemento por hacer', 
  {
    descripcion: {
      alias: 'd',
      demand: true,
      desc: 'Descipción de la tarea por hacer'
    }
  })
  .command('actualizar','actualiza el estado completado de una tarea',
  {
    descripcion: {
      alias: 'd',
      demand: true,
      desc: 'Descipción de la tarea por hacer'
    },
    completado:{
      alias: 'c',
      desc: 'marca como completado o pendiente la tarea',
      default: false
    }
  }).command('borrar','Elimina una tarea de la lista',
  {
    descripcion: {
      alias: 'd',
      demand: true,
      desc: 'Descripcion de la tarea a eliminar'
    }
  }
).help().argv

module.exports ={
  argv
} 