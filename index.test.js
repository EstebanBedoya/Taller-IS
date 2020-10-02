const salario = require('./index')

test('no permitir valores flotantes en las horas', () =>{
    expect(salario(5.3,30000)).toMatch('valores invalidos')
})

test('si son 48 horas o menos de trabajo, no se pagan horas extras', () =>{
    expect(salario(40,30000)).toEqual({ bruto: 1200000, extra: 0, neto: 1200000 })
})

test('no valores negativos en horas', () =>{
    expect(salario(-20,30000)).toMatch('valores invalidos')
})