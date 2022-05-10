// Exercícios de interpretação de código 1
const bool1 = true
const bool2 = false
const bool3 = !bool2
let resultado = bool1 && bool2
console.log("a. ", resultado)
// a. false
resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) 
// b. false
resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)
// c. true
console.log("d. ", typeof resultado)
// d. boolean

// -------------------------------------------------------------------------------------

// Exercícios de interpretação de código 2
let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")
const soma = primeiroNumero + segundoNumero
console.log(soma + " - O programa recebe duas strings e concatena.")
// O programa está recebendo duas strings e concatenando.


// Exercícios de interpretação de código 3
let primeiroNumero1 = prompt("Digite um numero!")
let segundoNumero2 = prompt("Digite outro numero!")
const soma2 = Number(primeiroNumero1) + Number(segundoNumero2)
console.log(soma2 + " - Dessa forma o programa recebe duas strings, converte pra número e realiza a soma")
//Dessa forma o programa recebe duas strings, converte pra número e realiza a soma

// -------------------------------------------------------------------------------------

// Exercícios de escrita de código 1

// 1. Faça um programa que:       
// a) Pergunte a idade do usuário
// b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga
// c) **Imprima na console** a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta (`true` ou `false`)
// d) **Imprima na console** a diferença de idade (não tem problema se sair um número negativo)

const suaIdade = prompt("digite sua idade")
const idadeAmigo = prompt("digite a idade do seu amigo")
const idadeComparada = suaIdade > idadeAmigo
console.log("sua idade é maior que a do seu amigo? " + idadeComparada)
console.log("A diferença entre a sua idade e a do seu amigo é de: " + suaIdade - idadeAmigo)

// -------------------------------------------------------------------------------------

// Exercícios de escrita de código 2

// 2. Faça um programa que:
// a) Peça ao usuário que insira um número **par**
// b) Imprima na console **o resto da divisão** desse número por 2.
// c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.
// d) O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código

let numeroPar = prompt("insira um número par")
let resto = numeroPar % 2
console.log(resto)

//O resto da divisão de qualquer número par por 2 é 0
//Se o usuário inserir um número impar vai aparecer o resto da divisão por 2

// -------------------------------------------------------------------------------------

// Exercícios de escrita de código 3 

// 3. Faça um programa que pergunte ao usuário sua idade em anos. Depois, imprima no console 
// a) A idade do usuário em meses
// b) A idade do usuário em dias
// c) A idade do usuário em horas
let idadeEmAnos = prompt("Digite sua idade em anos")
console.log("sua idade é = " + idadeEmAnos + " anos")
console.log("sua idade é = " + idadeEmAnos * 12 + " meses")
console.log("sua idade é = " + idadeEmAnos * 365 + " dias")
console.log("sua idade é = " + idadeEmAnos * 8765 + " horas")

// -------------------------------------------------------------------------------------

// Exercícios de escrita de código 4

// 4. Faça um programa que pergunte ao usuário dois números. 
// Em seguida, faça as operações e imprima no console as seguintes mensagens seguidas pelo 
// "true" ou "false":
// O primeiro numero é maior que segundo? true
// O primeiro numero é igual ao segundo? false
// O primeiro numero é divisível pelo segundo? true
// O segundo numero é divisível pelo primeiro? true
const numero1 = prompt("digite o primeiro número")
const numero2 = prompt("digite o segundo número")
const resultado1 = numero1 > numero2
const resultado2 = numero2 === numero1
const resultado3 = Boolean(numero1 % numero2 == 0)
const resultado4 = Boolean(numero2 % numero1 != 0)
console.log(`O primeiro numero (${numero1}) é maior que segundo numero (${numero2})? ${resultado1}`)
console.log(`O primeiro numero (${numero1}) é igual ao segundo numero (${numero2})? ${resultado2}`)
console.log(`O primeiro numero (${numero1}) é divisível pelo segundo numero (${numero2})? ${resultado3}`)
console.log(`O segundo numero (${numero2}) é divisível pelo primeiro numero (${numero2})? ${resultado4}`)

// -------------------------------------------------------------------------------------

// Desafio 1

// Para este exercício, será necessário o conhecimento das fórmulas para mudar a unidade de 
// temperatura entre Graus Celsius(°C), Graus Fahrenheit(°F) e Kelvin(K). 
// Abaixo estão duas delas:
// Graus Fahrenheit(°F) para Kelvin(K): (KELVIN) = (GRAUS_FAHRENHEIT - 32)*(5/9) + 273.15
// Graus Celsius(°C) para Graus Fahrenheit (°F): (GRAUS_FAHRENHEIT) = (GRAUS_CELSIUS)*(9/5) + 32
// Graus Celsius(°C) para Graus Kelvin(K): (KELVIN) = ((CELSIUS) + 273)

// a) Calcule e mostre o valor de 77°F em K, mostrando a unidade no console também.
let grausFahreinheit = 77
let grausFahrenheitConvertidoParaKelvin = ((grausFahreinheit - 32) * (5/9)) + 273.15
console.log(grausFahreinheit + " graus Fahrenheit é igual a " + grausFahrenheitConvertidoParaKelvin + " graus kelvin")

// b) Calcule e mostre o valor de 80°C em °F, mostrando a unidade no console também
let grausCelsius = 80
let grausCelsiusConvertidoParaFahrenheit = (grausCelsius * (9/5) + 32)
console.log(grausCelsius + " graus Celsius é igual a " + grausCelsiusConvertidoParaFahrenheit + " graus Fahrenheint")

// c) Calcule e mostre o valor de 30°C em °F e K, mostrando as unidades no console também
grausCelsius = 30
let grausCelsiusConvertidoParaklevin = ((grausCelsius) + 273)
console.log(grausCelsius + " graus Celsius é igual a " + grausCelsiusConvertidoParaFahrenheit + " graus Fahrenheint")
console.log(grausCelsius + " graus Celsius é igual a " + grausCelsiusConvertidoParaklevin + " graus Kelvin")

// d) Altere o último item para que o usuário insira o valor em graus Celsius que ele deseja converter
grausCelsius = prompt("insira o valor em graus Celsius a ser convertido para Kelvin")
grausCelsiusConvertidoParakelvin = ((grausCelsius) + 273)
console.log(grausCelsius + " graus Celsius é igual a " + grausCelsiusConvertidoParaFahrenheit + " graus Fahrenheint")
console.log(grausCelsius + " graus Celsius é igual a " + grausCelsiusConvertidoParakelvin + " graus Kelvin")

// -------------------------------------------------------------------------------------

// Desafio 2
// Quilowatt-hora é uma unidade de energia; e é muito utilizada para se determinar o consumo de 
// energia elétrica em residências. Sabe-se que o quilowatt-hora de energia custa R$0.05. 
// Faça um programa que receba a quantidade de quilowatts consumida por uma residência.
let quilowattHora = prompt("digite o seu consumo energético da sua casa em Quilowatt-hora")

//a) Calcule e mostre o valor a ser pago por uma residência que consuma 280 quilowatt-hora
let valor = (quilowattHora * 0.05)
console.log("O valor a ser pago é: R$" + valor)

//b) Altere o programa para receber mais um valor: a porcentagem de desconto.
//Calcule e mostre o valor a ser pago pela mesma residência acima considerando 15% de desconto
let desconto = (quilowattHora * 0.015)
valor = (valor - desconto)
console.log("Seu consumo foi de: " + quilowattHora)
console.log("O valor a ser pago é: " + valor)

// -------------------------------------------------------------------------------------

// Desafio 3
//Um grande problema que o mundo tem atualmente é a quantidade de unidades que existem para representar a mesma coisa. 
// Por exemplo, para representar a Massa de um corpo, podemos usar quilograma (kg), onça (oz) e até libra (lb). 
// Para representar Distâncias, existem metro (m), pés (ft), milha (mi). 
// Até para volumes, há várias opções: litro (l), galão (gal),  xícaras (xic). Dada essa introdução, faça o que se pede:
    
//a) Procure uma forma de converter libra (lb) para quilograma (kg) e escreva um programa que converta 20lb para kg. Imprima  a resposta no console da seguinte forma:
// "20lb equivalem a X kg"
let lb = 20
let lbParaKg = (lb * 2.2046)
console.log(lb +" libras correspondem a " + lbParaKg.toFixed(2) + " kgs")
    
//b) Procure uma forma de converter onça (oz) para quilograma (kg) e escreva um programa que converta 10.5oz para kg. Imprima  a resposta no console da seguinte forma: 
//"10.5oz equivalem a X kg"
let oz = 10.5
let ozParaKg = (oz / 35.274)
console.log(oz + " onças correspondem a " + ozParaKg.toFixed(4) + " kgs")

//c) Procure uma forma de converter milha (mi) para metro (m) e escreva um programa que converta 100mi para m. Imprima  a resposta no console da seguinte forma: 
//"100mi equivalem a X m"
let milha = 100
let milhaParaMetro = (milha / 0.00062137)
console.log(milha + " milhas correspondem a " + milhaParaMetro.toFixed(0) + " metros")

//d) Procure uma forma de converter pés (ft) para metro (m) e escreva um programa que converta 50ft para m. Imprima  a resposta no console da seguinte forma: 
//"50ft equivalem a X m"
let pes = 50
let pesParaMetro = (pes / 3.2808)
console.log(pes + " pes correspondem a " + pesParaMetro.toFixed(2) + " metros")

//e) Procure uma forma de converter galão (gal) para litro (l) e escreva um programa que converta 103.56gal para litro. Imprima  a resposta no console da seguinte forma: 
//"103.56gal equivalem a X l"
let galao = 103.56
let galaoParaLitro = (galao / 0.26417)
console.log(galao + " galões americanos correspondem a " + galaoParaLitro.toFixed(2) + " litros")
    
//f) Procure uma forma de converter xícara (xic) para litro (l) e escreva um programa que converta 450xic para litro. Imprima  a resposta no console da seguinte forma: 
//"450 xic equivalem a X l"
let xic = 450
let xicParaLitro = ((xic * 240) / 1000)
console.log(xic + " xícaras correspondem a " + xicParaLitro + " litros" )
    
//g) Escolha ao menos **um** dos itens anteriores e modifique o programa para que ele peça ao usuário o valor da unidade original antes de converter
galao = prompt("Digite a quantidade de galões a serem convertidos para Litros")
galaoParaLitro = (galao / 0.26417)
console.log(galao + " galões americanos correspondem a " + galaoParaLitro.toFixed(2) + " litros")