//Exercícios de interpretação de código

// 1. Leia o código abaixo

// function minhaFuncao(variavel) {
// 	return variavel * 5
// }

// console.log(minhaFuncao(2))
// console.log(minhaFuncao(10))
// minhaFuncao()

// a) O que vai ser impresso no console?
// 10, 50

// b) O que aconteceria se retirasse os dois `console.log` e 
// simplesmente invocasse a função `minhaFuncao(2)` e `minhaFuncao(10)`? 
// O que apareceria no console?
// Não apareceria nada no console.

// 2. Leia o código abaixo

// let textoDoUsuario = prompt("Insira um texto");
// const outraFuncao = function(texto) {
// 	return texto.toLowerCase().includes("cenoura")
// }
// const resposta = outraFuncao(textoDoUsuario)
// console.log(resposta)


// a. Explique o que essa função faz e qual é sua utilidade
// Essa função recebe o texto do usuário pelo prompt passa para letras
// minúsculas e retorna true ou false caso encontre a palavra "cenoura".

// b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
//      i.   `Eu gosto de cenoura`
//              true
//      ii.  `CENOURA é bom pra vista`
//              true
//      iii. `Cenouras crescem na terra`
//              true

// 1. Escreva as funções explicadas abaixo:
    
// a) A função não deve receber nenhum parâmetro e deve imprimir 
// uma mensagem falando algumas informações sobre você, como:
// "Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."
// Troque o nome, idade, cidade e se é estudante ou não por informações sobre você. 
// Lembrando que a função não possui entradas, apenas imprime essa mensagem.

const minhasInfos = function () {
    return console.log("Eu sou Jorge, tenho 28 anos, moro no SP e sou estudante na Labenu.")
}

minhasInfos()

// b)  Agora escreva uma função que receba 4 parâmetros que correspondem 
// às informações de uma pessoa: o nome (string), a idade (number), 
// a cidade (string) e uma profissão (string). 
// Ela deve retornar uma string que unifique todas as informações da 
// pessoa em uma só mensagem com o template:
// Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e sou [PROFISSÃO].

// opção 1
const minhasInfos2 = function (nome, idade, cidade, profissao) {
    nome = prompt("Digite seu nome")
    idade = prompt("Digite sua idade")
    cidade = prompt("Digite sua cidade")
    profissao = prompt("Digite sua profissao")
        return console.log(`Eu sou ${nome}, tenho ${idade} anos, moro no ${cidade} e sou ${profissao}`)
}

minhasInfos2()

//opção 2
const minhasInfos3 = function (nome, idade, cidade, profissao) {
    return console.log(`Eu sou ${nome}, tenho ${idade} anos, moro no ${cidade} e sou ${profissao}`)
}

minhasInfos3("Daniel", 34, "RJ", "Desenvolvedor")

// 2. Escreva as funções explicadas abaixo:
    
// a) Escreva uma função que receba 2 números como parâmetros, e, 
// dentro da função, faça a soma das duas entradas e retorne o resultado. 
// Invoque a função e imprima no console o resultado.

const soma = function(a,b) {
    return a+b
}

console.log(soma(5,6))

    
// b) Faça uma função que recebe 2 números e retorne um booleano que informa 
// se o primeiro número é **maior ou igual** ao segundo.

const booleano = function(a,b) {
    return a >= b
}

console.log(booleano(5,6))
console.log(booleano(10,2))

// c) Escreva uma função que receba um número e devolva um booleano indicando 
// se ele é par ou não

const booleano2 = function(a) {
    return a % 2 == 0
}

console.log(booleano2(5))
console.log(booleano2(10))

// d) Faça uma função que recebe uma mensagem (`string`) como parâmetro 
// e imprima o tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas.

const mensagem = function(texto) {
    return console.log(`${texto.toUpperCase()} e o tamanho dela é: ${texto.length}`)
}

mensagem("essa é uma frase de teste")

// 3. Crie uma função para cada uma das operações básicas 
// (soma, subtração, multiplicação e divisão). Em seguida, 
// peça para o usuário inserir dois números e chame essas 4 
// funções com esses valores inputados pelo usuário sendo o argumento.
// Por fim, mostre no console o resultado das operações:

const operacoesBasicas = function(a,b) {
    a = prompt("Digite o primeiro número")
    b = prompt("Digite o segundo número")
    const soma = Number(a)+Number(b)
    const subtracao = a-b
    const divisao = a/b
    const multiplicacao = a*b
    const resto = a%b

    return( console.log(`
    Soma = ${soma} 
    Subtração = ${subtracao}
    Divisão = ${divisao}
    Multiplicação = ${multiplicacao}
    Resto = ${resto}
`))      
}

operacoesBasicas()

// Desafios
// 1. Funções são trechos de códigos como quaisquer outros mas que podemos 
// acessá-los mais de uma vez ao longo do código através de invocações/chamadas. 
// Então, funções podem chamar/invocar outras funções também. 
// Sua tarefa é escrever duas funções
    
// a) Escreva uma *arrow function* que recebe um parâmetro e imprime no console esse parâmetro

const valorQualquer = (i) => {
    console.log(i)
}

valorQualquer(`O parâmetro inputado é: ${500}`)
valorQualquer(`O parâmetro inputado é: ${"Daniel Luiz Pereira"}`)
    
// b) Escreva outra *arrow function* que recebe dois valores como parâmetros mas **nenhum retorno.** 
// Faça a soma entre esses valores e chame a sua primeira função mandando este resultado da soma 
// como entrada para imprimi-lo

const parametroSemRetorno = (i,j) => {
    const soma = i+j
    valorQualquer(soma)
}

parametroSemRetorno(5,5)


// Desafio 2
//Faça uma função que execute o teorema de Pitágoras, 
// recebendo dois catetos e calculando o valor da hipotenusa.
// Retorne este valor, invoque a função e imprima o resultado 
// no console. 

const teorema = (cat1, cat2) => {
    let hip = Math.pow(cat1, 2) + Math.pow(cat2, 2)
    let hip2 = Math.sqrt(hip)
    return hip2
}

console.log(teorema(50,42))