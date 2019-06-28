const comidas = [
  'Batata frita',
  'Hamburguer',
  'Sorvete de chocolate',
  'Saladinha delicia'
]

// Exercício: Selecione apenas a batatinha
const batatinha = comidas.filter(comida => comida === 'Batata frita')
//console.log(batatinha)


// Exercício: transforme a lista de comidas em comidas divertidas (adicione uma carinha feliz nelas)

const comidas2 = [
  { nome: 'Batata frita', vegano: true },
  { nome: 'Hamburguer', vegano: false },
  { nome: 'Sorvete de chocolate', vegano: false },
  { nome: 'Saladinha delicia', vegano: true }
]

const comidasDivertidas = comidas.map(comida => {
  return comida + ':D xD o/'
})
//console.log(comidasDivertidas)

// Exercício: Selecione apenas as comidinhas veganas.

// const comidasVeganas = comidas2.filter(item => {
//   if(item.vegano){
//     console.log(item.nome)
//   }
//   return item.vegano
// })
// console.log(comidasVeganas)

const comidasVeganas = comidas2.filter(comida => comida.vegano === true)
//console.log(comidasVeganas)

const comidas3 = [
  { nome: 'Batata frita', vegano: true, valor: 5.00 },
  { nome: 'Hamburguer', vegano: false, valor: 18.00 },
  { nome: 'Sorvete de chocolate', vegano: false, valor: 7.00 },
  { nome: 'Saladinha delicia', vegano: true, valor: 12.00 }
]

// Exercício: Qual o custo total dessa refeição maneira?! 
// let custoRefeicao = 0
// comidas3.forEach(comida => {
//   custoRefeicao = custoRefeicao + comida.valor
// })
// console.log(custoRefeicao)

const custoDaRefeicao = comidas3.reduce((acumulador, comida) => {
  return acumulador + comida.valor
}, 0)
console.log(custoDaRefeicao)

//const sorteiaNumero = Math.floor(Math.random() *36)
//console.log(sorteiaNumero)