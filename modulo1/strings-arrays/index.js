// Exercícios de interpretação de código

// 1. Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.

let array
console.log('a. ', array)
//a. undefined

array = null
console.log('b. ', array)
//b. null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)
//c. 11

let i = 0
console.log('d. ', array[i])
//d. 3

array[i+1] = 19
console.log('e. ', array)
//e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]

const valor = array[i+6]
console.log('f. ', valor)
//f. 9

// 2. Leia o código abaixo com atenção
// Qual será o valor impresso no console se a entrada do usuário for: 
// "Subi num ônibus em Marrocos"
const frase = prompt("Digite uma frase")
console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
//SUBI NUM ÔNIBUS EM MIRROCOS, 27

// Exercícios de escrita de código

// 1. Faça um programa que pergunte ao usuário seu nome e seu e-mail. 
// Em seguida, Imprima no console a seguinte mensagem:
// O e-mail `emailDoUsuario` foi cadastrado com sucesso.
// Seja bem-vinda(o), `nomeDoUsuario`!

const nome = prompt("Digite seu nome")
const email = prompt("Digite seu e-mail")
console.log(`O e-mail ${email} foi cadastrado com sucesso. Seja bem-vinda(o), ${nome}!`)

// 2. Faça um programa que contenha um array com 5 das suas comidas preferidas,
// armazenado em uma variável. Em seguida, siga os passos:
let comidasFavoritas = ["lasanha", "pizza", "arroz", "sorvete", "chocolate"]
//                          0         1         2         3           4

//a) Imprima no console o array completo
console.log(comidasFavoritas)
    
//b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ", 
// seguida por cada uma das comidas, **uma embaixo da outra**.

console.log(`Essas são as minhas comidas preferidas:
${comidasFavoritas[0]}
${comidasFavoritas[1]}
${comidasFavoritas[2]}
${comidasFavoritas[3]}
${comidasFavoritas[4]}`)
    
//c) Aqui vai um desafio: pergunte ao usuário uma comida preferida.
// Troque a segunda comida da sua lista pela inserida pelo usuário. 
// Imprima no console a nova lista.
let comidaFavoritaUsuario = prompt("Qual a sua comida favorita?")
comidasFavoritas[1] = comidaFavoritaUsuario
console.log(comidasFavoritas)

// 3. Faça um programa, seguindo os passos:
    
// a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`
let listaDeTarefas = []

// b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array
let tarefa1 = prompt("Digite a primeira tarefa")
let tarefa2 = prompt("Digite a primeira tarefa")
let tarefa3 = prompt("Digite a primeira tarefa")

listaDeTarefas[0] = tarefa1
listaDeTarefas[1] = tarefa2
listaDeTarefas[2] = tarefa3

// c) Imprima o array no console
console.log(listaDeTarefas)

// d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 
let indice = prompt("Digite 0, 1 ou 2")

// e) Remova da lista o item de índice que o usuário escolheu.
listaDeTarefas.splice(indice,1)

// f) Imprima o array no console
console.log(listaDeTarefas)

// 1. Receba uma frase e retorne um array onde cada elemento é uma das palavras da frase, ignorando os espaços.
let frase2 = prompt("Digite uma frase")
let array3 = frase2.split(' ')
console.log(array3)

// 2. Dado o array `["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]`, 
// faça um programa que acha o índice da palavra Abacaxi e imprime tanto o índice quanto o tamanho do array

const array2 = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]

console.log(`O indice da palavra Abacaxi é: ${array2.indexOf("Abacaxi")} 
e o tamanho da Array é ${array2.length}`)