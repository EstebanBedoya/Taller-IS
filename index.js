function salario(horas, valorHora) {

    let informe = { 'bruto': 0, 'extra': 0, 'neto': 0 }

    if (typeof (horas) == 'number' && typeof (valorHora) == 'number') {

        if (horas <= 60 && horas >= 0 && valorHora >= 0) {
            informe['bruto'] = horas * valorHora
            if (horas > 48) {
                informe['extra'] = informe['bruto'] + (valorHora * 0.2) * (horas - 48)
            }
            informe['neto'] = informe['bruto'] + informe['neto']
            return informe

        } else {
            return 'valores invalidos'
        }
    } else {
        return 'tipo de variables invalidas'
    }

}


module.exports = salario