// // Exercicios de interpretação de código
// // 1. O que o código abaixo está fazendo? Qual o resultado impresso no console?
// let valor = 0
// for(let i = 0; i < 5; i++) {
//   valor += i
// }
// console.log(valor)
// //O código diz: enquanto i for menor que 5, imprima o valor
// // Está imprimindo o valor de 0 a 10 por causa do incremento i++ do for e do incremento de "valor += i"


// // 2. Leia o código abaixo:
// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//   if (numero > 18) {
// 		console.log(numero)
// 	}
// }
// // a) O que vai ser impresso no console?
// // Vai ser impresso todos os números maior que 18

// // b) Se eu quisesse acessar o **índice** de cada elemento dessa lista, o `for...of...` é suficiente? Se sim, o que poderia ser usado para fazer isso?
// // Sim é possível.
// const lista2 = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let i of lista2) {
// 		console.log(i)
// }

// // 3. Qual seria o resultado impresso no console, se o usuário digitasse o número 4 ?
// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// let quantidadeAtual = 0
// while(quantidadeAtual < quantidadeTotal){
//   let linha = ""
//   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//     linha += "*"
//   }
//   console.log(linha)
//   quantidadeAtual++
// }
// // O resultado seria uma sequecie e 1, 2, 3 e 4 asteriscos em coluna.

// // Exercícios de escrita de código

// // 1. Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 
// // a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!" 
// // b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array
// // c) Por fim, imprima o array com os nomes dos bichinhos no console

// let quantidade = Number(prompt("Quantos animais de estimação você tem"))
// let array = []

// if(quantidade == 0) {
//     console.log("Que pena! Você pode adotar um pet!")
// } else {
//     let i = 0
//     while (i < quantidade) {
//         array[i] = prompt("Digite o nome do animal")
//         i++
//     }   
// } 
// console.log(array)

// //2. Considere que você tenha acesso a um `array`  (chamado de 'array original') que é composto somente de números. Baseando-se nisso, crie uma função para cada um dos itens abaixo, realizando as operações pedidas:
    
// const arrayOriginal = [8,22,30,41,6,67]

// // a) Escreva um programa que **imprime** cada um dos valores do array original.
    
// for(let i = 0; i < arrayOriginal.length; i++) {
//     console.log(arrayOriginal[i])
// }
// // b) Escreva um programa que **imprime** cada um dos valores do array original divididos por 10
// for(let i = 0; i < arrayOriginal.length; i++) {
//     console.log(arrayOriginal[i] / 10)
// }

// // // c) Escreva um programa que **crie** um novo array contendo, somente, os números pares do array original e **imprima** esse novo array
// let novoArray = []
// for(let i = 0; i < arrayOriginal.length; i++) {
//     if(arrayOriginal[i] % 2 == 0) {
//         novoArray.push(arrayOriginal[i])
//     }
// }
// console.log(novoArray)

// // d) Escreva um programa que **crie** um novo array contendo strings, da seguinte forma: "O elemento do índex `i` é: `numero`". Depois, **imprima** este novo array.
// let novoArrayString = []

// for(let i = 0; i < arrayOriginal.length; i++) {
//     novoArrayString.push(`O indice ${i} é igual a ${arrayOriginal[i]}`)
// }
// console.log(novoArrayString)

// // e) Escreva um programa que imprima no console o maior e o menor números contidos no array original
// const arrayOriginal2 = [8,22,30,41,6,1]

// let maior = 0;
// let menor = 0;

// for(let i = 0; i < arrayOriginal2.length; i++) {

//     if(maior < arrayOriginal2[i]){
//         maior = arrayOriginal2[i]
//         menor = maior
//     }

//     if(menor > arrayOriginal2[i]){
//         menor = arrayOriginal2[i]
//     }
// }
// console.log(maior, menor)

// Desafios
// 1. Neste exercício vocês vão implementar uma brincadeira muito simples: "Adivinhe o número que estou pensando". Ele deve ser jogado entre duas pessoas.  
// Inicialmente, uma das pessoas insere qual o número em que ela pensou. A outra pessoa tem que ficar chutando até acertar em cheio o número. Esta é uma tarefa difícil, então quem escolheu o número fica dando umas dicas para a outra pessoa, indicando se o número que ela pensou é maior ou menor do que o chute em si. Veja, abaixo, um exemplo de partida:

// a) Solicitar que o primeiro jogador escolha um número, através do prompt. Neste momento, deve-se imprimir no console a mensagem Vamos jogar!



// b) A partir daí, será solicitado, ao segundo jogador, que ele chute os números até acertar, através do prompt. A cada chute, deve ser informado no console:

function jogar() {

    const numeroEscolhido = prompt("Escolha um número")
    console.log("Vamos jogar!")

    let tentativas = 0

    let numeroChute = prompt("Chute um número")

    while (numeroChute !== numeroEscolhido)

    tentativas = 0
    numeroChute = prompt("Chute um número")

    if(numeroChute < numeroEscolhido) {
        console.log(`O número que você chutou é ${numeroChute}. Ele é menor.`)
        tentativas++

    } else {
        if (numeroChute > numeroEscolhido) {
        console.log(`O número que você chutou é ${numeroChute}. Ele é maior.`)

        tentativas++

    } else console.log(`Parabéns você acertou!" ${tentativas}`)
    }
    
}

jogar()