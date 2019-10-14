//
const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por realizar'
}

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'
}

const argv = require('yargs')
    .command('crear', 'Crea un nuevo elemento', { descripcion })
    .command('actualizar', 'Actualiza el estado completo de una tarea', { descripcion, completado })
    .command('borrar', 'Elimina una tarea', { descripcion })
    .help()
    .argv;

module.exports = {
    argv
}
