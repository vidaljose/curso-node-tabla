const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs')

//option ('l')
//listar
//boolean
//default:false

console.clear()
// console.log(argv.h)

crearArchivo(argv.b,argv.l,argv.h)
    .then(nombreArchivo=>console.log(nombreArchivo,' creado'))
    .catch(err=>console.log(err))