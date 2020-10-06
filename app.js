const { argv } = require('./config/yargs')

const porHacer = require('./por-hacer/por-hacer')

console.log(argv);

let comando = argv._[0]
 console.log(comando);
 
  switch (comando) {
    
    case 'listar':
      // console.log('hola');
      
      let listado = porHacer.getListado();
      
      for (const tarea of listado) {
        console.log('===========Por hacer===========');
        console.log('Descrición: ',tarea.descripcion);
        console.log('Estado: ',tarea.completado);
        console.log('===============================');
        
      }
    break;

    case 'crear':
      let tarea = porHacer.crear(argv.descripcion)
      console.log(tarea);
      
    break;

    case 'actualizar':
      let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
      console.log(actualizado);
    break;

    case 'borrar':
      let borrar = porHacer.borrar(argv.descripcion);

      console.log(borrar);
      
    break;

    default:
      console.log('comando no reconocido');
    break;
  }

