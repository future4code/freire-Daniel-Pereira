// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const base = prompt("Digite a altura")
  const altura = prompt("Digite a largura")
  const area = base * altura
  console.log(area)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = prompt("Digite o ano atual")
  const anoNascimento = prompt("Digite o ano do seu nascimento")
  const idade = anoAtual - anoNascimento
  console.log(idade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  // peso / altura ao quadrado
  
  const imc = peso / Math.pow(altura,2)
  return imc
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt("Digite seu nome")
  const idade = prompt("Digite sua idade")
  const email = prompt("Digite seu email")
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  //implemente sua lógica aqui
  let cor1 = prompt("cor1")
  let cor2 = prompt("cor2")
  let cor3 = prompt("cor3")
  let array = [cor1,cor2,cor3]
  console.log(array)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  const frase = string.toUpperCase()
  return frase
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  const custoSemPrejuizo = custo / valorIngresso
  return custoSemPrejuizo
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  const t1 = string1.length
  const t2 = string2.length
  return t1 == t2
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array[array.length-1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  const tamanho = array.length
  const temporaria = array[0]
  array[0] = array[tamanho-1]
  array[tamanho-1] = temporaria
  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  let comparacao = string1.toLowerCase() === string2.toLowerCase()
  return comparacao
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const anoAtual = prompt("ano atual")
  const anoNascimento = prompt("ano nascimento")
  const anoEmissaoID = prompt("emissao")
  const idade = anoAtual - anoNascimento
  const validade = anoAtual - anoEmissaoID

  const booleano1 = validade >= 5 && idade <= 20 
  const booleano2 = validade >= 10 && (idade > 20 && idade <= 50)
  const booleano3 = validade > 15 && idade > 50

  console.log(booleano1 || booleano2 || booleano3)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}