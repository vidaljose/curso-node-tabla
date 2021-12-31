const argv = require('yargs')
    .options({
        'b':{
            alias:'base',
            type:'number',
            demandOption: true,
        },
        'l':{
            alias:'listar',
            type:'boolean',
            demandOption: false,
            default:false,
            describe: 'Muestra la lista de los calculos'

        },
        'h':{
            alias:'hasta',
            type:'number',
            default:10,
            describe: 'Coloca el limite de la tabla'

        }
    })
    .check((argv,options)=>{
        if(isNaN(argv.b)){
            throw 'La base tiene que ser un numero'
        }
        return true
    })
    .argv;

module.exports= argv;