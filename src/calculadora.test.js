// Importar a classe ou as funções da calculadora que serão testadas
const { somar, subtrair, multiplicar, dividir } = require("./calculadora")

test("Teste de soma", () => {
  expect(somar(2, 3)).toBe(5)
})

test("Teste de subtração", () => {
  expect(subtrair(5, 2)).toBe(3)
})

test("Teste de multiplicação", () => {
  expect(multiplicar(2, 3)).toBe(6)
})

test("Teste de divisão", () => {
  expect(dividir(10, 2)).toBe(5)
})

test("Teste de divisão - Divisão por zero", () => {
  expect(dividir(20, 0)).toBe("Erro: divisão por zero")
})
