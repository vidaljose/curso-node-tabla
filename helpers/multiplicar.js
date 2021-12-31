const fs = require('fs')
const colors = require('colors')

const crearArchivo = async (base = 5, listar,hasta) => {
    try {
        let salida = '';
        let consola = '';
        for (let i = 1; i <= hasta; i++) {
            consola += `${colors.yellow(base)} ${colors.red('x')} ${i} ${colors.yellow('=')} ${colors.green(base * i)} \n`
            salida += `${base} x ${i} = ${base * i} \n`
        }
        
        if (listar) {
            console.log('=======================')
            console.log('      TABLA DEL ', base)
            console.log('=======================')
            console.log(consola)

        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`,salida)
        return `tabla-${base}.txt`
    } catch (err) {
        throw err
    }

}

module.exports = {
    crearArchivo
}