function salario(horas, valorHora) {
    const soloInt = /^\d*$/ //expresion regular para solo permitir valores enteros positivos
    let informe = { 'bruto': 0, 'extra': 0, 'neto': 0 }

    if (!soloInt.test(horas) || !soloInt.test(valorHora)) return 'valores invalidos'

    if (horas <= 60) {        
        if (horas > 48) {
            informe['bruto'] = 48 * valorHora
            informe['extra'] =(valorHora * 1.2) * (horas - 48)
        }else{
            informe['bruto'] = horas * valorHora
        }
        informe['neto'] = informe['bruto'] + informe['extra']
        return informe
    } else{
        return 'valores invalidos'
    }

}

module.exports = salario