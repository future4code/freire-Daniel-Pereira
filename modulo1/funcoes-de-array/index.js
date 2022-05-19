// Interpretação de código
// 1. Leia o código abaixo

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" }
//   ]
  
//   const novoArrayA = usuarios.map((item, index, array) => {
//      console.log(item, index, array)
//   })

  //a) O que vai ser impresso no console?
  //Vai ser impresso cada item do array original com o indice e um array completo

  // 2. Leia o código abaixo
  
//   const usuarios = [
//   { nome: "Amanda Rangel", apelido: "Mandi" },
//   { nome: "Laís Petra", apelido: "Laura" },
//   { nome: "Letícia Chijo", apelido: "Chijo" },
// ]

// const novoArrayB = usuarios.map((item, index, array) => {
//    return item.nome
// })

// console.log(novoArrayB)

//a) O que vai ser impresso no console?
// Vai ser impresso um array com apenas os nomes do array original

// 2. Leia o código abaixo
  
// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayC = usuarios.filter((item, index, array) => {
//      return item.apelido !== "Chijo"
//   })
  
//   console.log(novoArrayC)

// a) O que vai ser impresso no console?
// Vai ser impresso um array com apenas os nomes do array original
// Vai ser impresso um array com os objetos que não possuem Chijo como apelido

// Exercícios de escrita de código

// 1. Dado o seguinte array de cachorrinhos que são clientes de um pet shop, realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

 // a) Crie um novo array que contenha apenas o nome dos doguinhos

const imprimirApenasNomes = (callback) => {
    return callback.nome
}
 const apenasNomeDosDoguinhos = pets.map(imprimirApenasNomes)
 console.log(apenasNomeDosDoguinhos)

 // b) Crie um novo array apenas com os cachorros salsicha

const imprimirApenasSalsichas = pets.filter((callback) => {
     if (callback.raca === "Salsicha")
     return true
 })
 console.log(imprimirApenasSalsichas)

// c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a [NOME]!"

const apenasPoodles = pets.filter((callback) => {
    if (callback.raca === "Poodle")
    return callback
})

const mensagem = apenasPoodles.map((callback) => {
    return `Você ganhou 10% de desconto pra tosar o(a) ${callback.nome}`
})

console.log(mensagem)

// 2. Dado o seguinte array de produtos, realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

// a) Crie um novo array que contenha apenas o nome de cada item:
const produtosApenasNome = produtos.map((callback) => {
    return callback.nome
})
console.log(produtosApenasNome)

// b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles:

const precoComDesconto = produtos.map((callback) => {
    return {nome:callback.nome, preco:callback.preco.toFixed(2) * 0.95}
})
console.log(precoComDesconto)

// c) Crie um novo array que contenha apenas os objetos da categoria Bebidas

const produtosBebida = produtos.filter((callback) => {
    if(callback.categoria === "Bebidas") {
        return true
    }
})

console.log(produtosBebida)

// d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"
const nomeYpe = produtos.filter((callback) => {
    if(callback.nome.includes("Ypê")) {
        return true
    }
})
console.log(nomeYpe)

// e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". 
// Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"

const comprarYpe = nomeYpe.map((callback) => {
    if (callback.nome.includes("Ypê")) {
    return `Compre ${callback.nome} por ${callback.preco}`
    }
})
console.log(comprarYpe)


// Desafios

// 1. Dado o seguinte array de pokémons, realize as operações pedidas nos itens abaixo:

const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
 ]

 // a) Crie um novo array que contenha apenas o nome dos pokémons em ordem alfabética
 
 const ordemAlfabetica = pokemons.map((callback) => {
    return callback.nome
 })

 console.log(ordemAlfabetica.sort()) // sort organiza em ordem alfabética


 // b) Crie um novo array apenas com os nome tipos dos pokémons, sem repetição

 const tipoPokemon = pokemons.map((callback) => {
     return callback.tipo
 })

 const semRepeticao = [...new Set(tipoPokemon)] //tira as repetições

 console.log(semRepeticao)