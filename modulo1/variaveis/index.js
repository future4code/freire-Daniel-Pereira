// Exercícios de interpretação de código 1
// let a = 10
// let b = 10
// console.log(b)

// Exercícios de interpretação de código 2
// b = 5
// console.log(a, b)
//  10, 10, 5

// Exercícios de interpretação de código 3
// let a = 10
// let b = 20
// c = a
// b = c
// a = b
// console.log(a, b, c)
// 10, 10, 10


// Exercícios de escrita de código 1 
let nome;
let idade;
console.log(typeof(nome))
console.log(typeof(idade))
//foi impresso undefined pois não foi declarado nenhum valor às variáveis

nome = prompt("Digite seu nome")
idade = prompt("Digite sua idade")
console.log(typeof(nome))
console.log(typeof(idade))
//foi impresso string para ambos pois os valores são recebidos como texto
console.log(`Olá ${nome}, você tem ${idade} anos de idade`)

// Exercícios de escrita de código 2
const pergunta1 = prompt("Você gosta de passear?")
const pergunta2 = prompt("Você toma café?")
const pergunta3 = prompt("Você faz faculdade?")

console.log("Você gosta de passear? " + pergunta1 + ". Você toma café? " + pergunta2 + ". Você faz faculdade? " + pergunta3)

// Exercícios de escrita de código 3
let a = 10
let b = 25
aTemp = a
a = b
b = aTemp
console.log("a = " + a + " b = " + b)

// Desafio 1
let valorDiaTrabalhado = prompt("Quanto você recebe por dia?")
let horasTrabalhadasPorDia = prompt("Quantas horas você trabalha por dia?")
alert(`Voce recebe ${valorDiaTrabalhado/horasTrabalhadasPorDia} por hora`)

// Desafio 2
let primeiroNumero = prompt("digite um número")
let segundoNumero = prompt("digite o segundo número")
let soma = Number(primeiroNumero) + Number(segundoNumero)
let multiplicacao = Number(primeiroNumero) * Number(segundoNumero)
alert("A soma é = " + soma + " e a multiplicação é = " + multiplicacao)