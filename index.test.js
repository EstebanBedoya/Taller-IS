const { TestScheduler } = require('jest')
const salario = require('./index')

test('test para probar los test', () =>{
    expect(salario(5,5)).toBe([{"horas":5, "valorHora":5}])
})