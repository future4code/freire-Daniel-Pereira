// Exercícios de interpretação de código

// 1. Leia o código abaixo:

// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)
// if (numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }

// a) Explique o que o código faz. Qual o teste que ele realiza? 
// O código recebe um número do usuário e verifica se ele é divisível por 2.

// b) Para que tipos de números ele imprime no console "Passou no teste"? 
// Todos os números divisíveis por 2 pois o resto da divisão é 0.
// É isso que a % faz, compara se o resto da divisão é 0.

// c) Para que tipos de números a mensagem é "Não passou no teste"?
// Números não divisíveis por 2.

// 2. O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado:

// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//    break;
//   case "Pêra":
//     preco = 5.5
//    break;
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

// a) Para que serve o código acima?
// O código recebe do usuário o nome de uma fruta.
// O programa devolve uma string com a frase: "O preço da nome-da-fruta é R$valor-da-fruta.

// b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
// O preço da Maçã é R$2.25

// c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?
// O programa considera o próximo valor que contenha o break. No caso da Pêra o próximo valor com break é o default.
// O preço da fruta Pêra é R$ 5

// 3. Leia o código abaixo:

// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//     console.log("Esse número passou no teste")
//     let mensagem = "Essa mensagem é secreta!!!"
// }

// console.log(mensagem)

// a) O que a primeira linha está fazendo?
// A primeira linha está recebendo do usuário uma string e convertendo em Number

// b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
// Se for 10 a mensagem será "Esse número passou no teste".
// Se for -10 não irá mostrar nenhuma mensagem.

// c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
// Há uma mensagem de erro dizendo que "mensagem" não foi definida. 
// A variável "mensagem" não pode ser definida dentro do escopo do if.

// Exercícios de escrita de código

// 1. Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).
    
// a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.
// b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.
// c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."`

const idade = Number(prompt("Digite sua idade"))

if (idade >= 18) {
    console.log("Você pode dirigir")
} else {
    console.log("Você não pode dirigir")
}

// 2. Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else

const turnoDoAluno = prompt("Digite m para Matutino, v para Vespertino ou n para Noturno").toLowerCase()

function verificaTurno(turno) {
    if(turno == "m") {
        console.log("Bom dia")
    } else if (turno == "v") {
        console.log("Boa tarde")
    } else console.log("Boa noite")
}

verificaTurno(turnoDoAluno)

// 3. Repita o exercício anterior, mas utilizando a estrutura de switch case agora.

switch (turnoDoAluno) {
    case 'm':
        console.log("Bom dia")
        break
    case 'v':
        console.log("Bom tarde")
        break
    case 'n':
        console.log("Boa noite")
        break
    default:
        console.log("Você não digitou nenhum turno válido")
        break
}

// 4. Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme com você se ele for do gênero fantasia e se o ingresso está abaixo de 15 reais. Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme. Caso positivo, imprima no console a mensagem: "Bom filme!", caso contrário, imprima "Escolha outro filme :("

const generoDoFilme = prompt("Digite o gênero do filme")
const valorDoIngresso = prompt("Digite o valor do ingresso")

if (generoDoFilme == "fantasia" && valorDoIngresso <= 15) {
    console.log("Bom filme!")
} else {
    console.log("Escolha outro filme")
}

// Desafios
// 1. Modifique o código do exercício 4 de escrita de código para, antes de imprimir a mensagem "Bom filme!", pergunte ao usuário, pelo prompt qual lanchinho ele vai comprar (pipoca, chocolate, doces, etc) e imprima no console as mensagens "Bom filme!" e "Aproveite o seu [LANCHINHO]", trocando [LANCHINHO] pelo que o usuário colocou no input.

const lanchinho = prompt("Qual lanchinho você vai querer?")

if (generoDoFilme == "fantasia" && valorDoIngresso <= 15) {
    console.log(`Bom filme e aproveite o(a) seu(sua) ${lanchinho}`)
} else {
    console.log("Escolha outro filme")
}

// 2. Enunciado no notion

const nomeCompleto = prompt("Digite seu nome completo")
let tipoDeJogo = prompt("DO para Doméstico / IN para Internacional").toLocaleLowerCase()
let etapaDeJogo = prompt("'SF' para Semi-Final / 'DT' para decisão de terceiro lugar / 'FI' para final").toLocaleLowerCase()
let categoria = prompt("1, 2, 3, 4")
let quantidadeDeIngressos = prompt("Digite quantos ingressos quer comprar")
let valorIngresso = 0

// Tipo de Jogo - Doméstico

// Condições jogo doméstico etapa Semi-Final

if(categoria == 1 && tipoDeJogo == "do" && etapaDeJogo == "sf") {
    valorIngresso = 1320
} else if (categoria == 2 && tipoDeJogo == "do" && etapaDeJogo == "sf") {
    valorIngresso = 880
} else if (categoria == 3 && tipoDeJogo == "do" && etapaDeJogo == "sf") {
    valorIngresso = 550
} else if (categoria == 4 && tipoDeJogo == "do" && etapaDeJogo == "sf") {
    valorIngresso = 220
}

// Condições jogo doméstico etapa Decisão Terceiro Tempo

if(categoria == 1 && tipoDeJogo == "do" && etapaDeJogo == "dt") {
    valorIngresso = 660
} else if (categoria == 2 && tipoDeJogo == "do" && etapaDeJogo == "dt") {
    valorIngresso = 440
} else if (categoria == 3 && tipoDeJogo == "do" && etapaDeJogo == "dt") {
    valorIngresso = 330
} else if (categoria == 4 && tipoDeJogo == "do" && etapaDeJogo == "dt") {
    valorIngresso = 170
}

// Condições jogo doméstico etapa Final

if(categoria == 1 && tipoDeJogo == "do" && etapaDeJogo == "fi") {
    valorIngresso = 1980
} else if (categoria == 2 && tipoDeJogo == "do" && etapaDeJogo == "fi") {
    valorIngresso = 1320
} else if (categoria == 3 && tipoDeJogo == "do" && etapaDeJogo == "fi") {
    valorIngresso = 880
} else if (categoria == 4 && tipoDeJogo == "do" && etapaDeJogo == "fi") {
    valorIngresso = 330
}

// Condições jogo internacional etapa Semi-Final

if(categoria == 1 && tipoDeJogo == "in" && etapaDeJogo == "sf") {
    valorIngresso = 1320 * 4.1
} else if (categoria == 2 && tipoDeJogo == "in" && etapaDeJogo == "sf") {
    valorIngresso = 880 * 4.1
} else if (categoria == 3 && tipoDeJogo == "in" && etapaDeJogo == "sf") {
    valorIngresso = 550 * 4.1
} else if (categoria == 4 && tipoDeJogo == "in" && etapaDeJogo == "sf") {
    valorIngresso = 220 * 4.1
}

// Condições jogo internacional etapa Decisão Terceiro Tempo

if(categoria == 1 && tipoDeJogo == "in" && etapaDeJogo == "dt") {
    valorIngresso = 660 * 4.1
} else if (categoria == 2 && tipoDeJogo == "in" && etapaDeJogo == "dt") {
    valorIngresso = 440 * 4.1
} else if (categoria == 3 && tipoDeJogo == "in" && etapaDeJogo == "dt") {
    valorIngresso = 330 * 4.1
} else if (categoria == 4 && tipoDeJogo == "in" && etapaDeJogo == "dt") {
    valorIngresso = 170 * 4.1
}

// Condições jogo internacional etapa Final

if(categoria == 1 && tipoDeJogo == "in" && etapaDeJogo == "fi") {
    valorIngresso = 1980 * 4.1
} else if (categoria == 2 && tipoDeJogo == "in" && etapaDeJogo == "fi") {
    valorIngresso = 1320 * 4.1
} else if (categoria == 3 && tipoDeJogo == "in" && etapaDeJogo == "fi") {
    valorIngresso = 880 * 4.1
} else if (categoria == 4 && tipoDeJogo == "in" && etapaDeJogo == "fi") {
    valorIngresso = 330 * 4.1
}


if(tipoDeJogo == "do"){
    tipoDeJogo = "Doméstico"
} else {
    tipoDeJogo = "internacional"
}

//Etapa do Jogo - Semi-Final / Decisão pelo Terceiro Lugar / Final

if(etapaDeJogo == "sf") {
    etapaDeJogo = "Semi-Final"
} else if (etapaDeJogo == "dt") {
    etapaDeJogo = "Decisão do Terceiro Lugar"
} else if (etapaDeJogo == "fi") {
    etapaDeJogo = "Final"
}

if(tipoDeJogo == "in"){
    valorIngresso = valorIngresso * 4.1
}


console.log(`
    Nome do cliente: ${nomeCompleto}
    Tipo de jogo: ${tipoDeJogo}
    Etapa do jogo: ${etapaDeJogo}
    Categoria: ${categoria}
    Quantidade de ingressos: ${quantidadeDeIngressos}
    ---Valores---
    Valor do ingresso: R$${Math.ceil(valorIngresso)},00
    Valor total: R$${Math.ceil(valorIngresso * quantidadeDeIngressos)},00
`)



