function salario(horas, valorHora) {
    const soloInt = /^\d*$/ //expresion regular para solo permitir valores enteros positivos
    let informe = { 'bruto': 0, 'extra': 0, 'neto': 0 }

    if (!soloInt.test(horas) || !soloInt.test(valorHora)) return 'valores invalidos'

    if (horas <= 60) {
        informe['bruto'] = horas * valorHora
        if (horas > 48) {
            informe['extra'] = informe['bruto'] + (valorHora * 0.2) * (horas - 48)
        }
        informe['neto'] = informe['bruto'] + informe['neto']
        return informe
    } else{
        return 'valores invalidos'
    }

}

module.exports = salario