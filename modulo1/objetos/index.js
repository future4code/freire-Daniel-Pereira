// Exercícios de interpretação de código

// 1. Leia o código abaixo:

const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])
//"Matheus Nachtergaele"
console.log(filme.elenco[filme.elenco.length - 1])
//"Virginia Cavendish"
console.log(filme.transmissoesHoje[2])
//canal: "Globo", horario: "14h"

// 2. Leia o código abaixo:

const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
//	nome: "Juca", 
//	idade: 3, 
//	raca: "SRD"
console.log(gato)
// "Juba"
//	idade: 3, 
//	raca: "SRD"
console.log(tartaruga)
// "Jubo"
//	idade: 3, 
//	raca: "SRD"

//Primeiro ele imprimiu todos os elementos do objeto cachorro
//Segundo criou o objeto gato com os elementos do objeto
//cachorro, porém substituindo o nome: Juca por Juba
//E por último ele criou o objeto tartarura a partir do objeto gato
// e substituiu o nome Juba trocando as letras "a" por "o"


// Exercícios de escrita de código

// 1.Resolva os passos a seguir: 
    
// a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre terá exatamente **três apelidos**). Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo**:**

const daniel = {
    nome: "Daniel",
    apelidos: [
        "dan",
        " dani",
        " ou danilu"
    ]
}

function imprime(nome) {
    console.log(nome)
}
imprime(`Oi, eu sou ${daniel.nome} mas pode me chamar de ${daniel.apelidos}`)

// b) Agora, usando o operador spread, crie um novo objeto mantendo o valor da propriedade nome, mas com uma nova lista de três apelidos. Depois, chame a função feita no item anterior passando como argumento o novo objeto

const daniel2 = {
    ...daniel,
    apelidos: [
        "apelido_1",
        " apelido_2",
        " ou apelido_3",
    ]
}

imprime(`Oi, eu sou ${daniel2.nome} mas pode me chamar de ${daniel2.apelidos}`)

// 2. Resolva os passos a seguir: 
    
// a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão. 

const funcionario1 = {
    nome: "Daniel",
    idade: 34,
    profissao: "Web Developer"
}

const funcionario2 = {
    nome: "Pilar",
    idade: 71,
    profissao: "Aposentada"
}
   
// b) Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:
    
// 1. O valor de `nome`
// 2. O numero de caracteres do valor `nome`
// 3. O valor de `idade`
// 4. O valor de `profissão`
// 5. O numero de caracteres do valor `profissão`

function funcionario(cadastro) {
    return [cadastro.nome, cadastro.nome.length, cadastro.idade, cadastro.profissao, cadastro.profissao.length]
}

console.log(funcionario(funcionario2))

// 3. Resolva os passos a seguir: 
    
// a) Crie uma variável de escopo global que guarde um `array` vazio chamada `carrinho`
    
const carrinho = []

// b) Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as seguintes propriedades: nome (`string`) e disponibilidade (`boolean` - devem começar como `true`)

const fruta1 = {
    nome: "banana",
    disponibilidade: true
}
const fruta2 = {
    nome: "goiaba",
    disponibilidade: true
}
const fruta3 = {
    nome: "abacaxi",
    disponibilidade: true
}
    
// c) Crie uma função que **receba** um objeto fruta por **parâmetro** e coloque-a dentro do array de `carrinho`. Invoque essa função passando os três objetos criados.

function compra(x,y,z) {
   carrinho.push(x,y,z)
   return carrinho
}

// d) Imprima a variável `carrinho` e garanta que ela agora seja um **array preenchido com três objetos.
console.log(compra(fruta1, fruta2, fruta3))

//Desafios

//1. Crie um função que pergunte ao usuário seu nome, sua idade e sua profissão e depois imprima no console um objeto com essas propriedades. Depois de imprimir o novo objeto, imprima também o tipo dele para garantir que é um objeto.

function cadastro() {
    const pessoa = {
    nome: prompt("Digite seu nome"),
    idade: prompt("Digite sua idade"),
    profissao: prompt("Digite sua profissao")
    }
    console.log(pessoa, typeof(pessoa))
}

cadastro()

//2. Crie uma função que receba dois objetos que representam filmes. Eles devem ter as propriedades: ano de lançamento e nome. A função deve retornar uma mensagem no seguinte modelo:

function filmes() {
        const filme1 = {
            nome: "Iron man",
            lancamento: 2008
        }
        const filme2 = {
            nome: "Iron Man 2",
            lancamento: 2010
    }
        console.log(`O primeiro filme foi lançado antes do segundo? ${filme1.lancamento > filme2.lancamento} `)
        console.log(`O primeiro filme foi lançado no mesmo ano do segundo? ${filme1.lancamento <= filme2.lancamento || filme1.lancamento >= filme2.lancamento}`)
}
    filmes()

//3. Crie uma função a mais pro exercício 3 de escrita de código. Essa função vai auxiliar o controle de estoque do sacolão: ela deve receber por parâmetro uma das frutas e retornar esse mesmo objeto com a propriedade disponibilidade com o valor invertido. 

function compra2(fruta) {
    const novaDispo = {
        ...fruta,
        disponibilidade: !fruta.disponibilidade
    }
    return novaDispo
 }

 console.log(compra2(fruta1))
