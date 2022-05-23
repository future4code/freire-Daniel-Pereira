// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  array.sort((a,b) => {
      if(a > b) return 1;
      if(a < b) return -1;
      return 0;
  })
  return array
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    let pares = array.filter((callback) => {
        if(callback % 2 == 0)
        return true
    })
    return pares
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let pares = array.filter((callback) => {
        if(callback % 2 == 0)
        return true
    }).map((callback) => {
        return callback ** 2
    })
    return pares
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    return Math.max.apply(Math, array)
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

    function maiorNumero() {
        if(num1 > num2){
            return num1
        } else return num2;
    }
    function maiorDivisivelPorMenor() {
        if(num1 > num2 && num1 % num2 == 0) {
            return true 
        } else if (num2 > num1 && num2 % num1 == 0) {
            return true
        } else if (num1 == num2 && num1 % num2 == 0) {
            return true        
        } else if (num2 == num1 && num2 % num1 == 0) {
            return true
        } else return false
    }

    function diferenca() {
        if(num1 - num2 > 0) {
            return num1 - num2
        } else return num2 - num1
    }

    const objeto = {
        maiorNumero: maiorNumero(),
        maiorDivisivelPorMenor: maiorDivisivelPorMenor(),
        diferenca: diferenca()
    }
    return objeto
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let pares = [];
    for(let i = 0; i < n; i++) {
       pares.push(i*2)
   }
   return pares
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA == ladoB && ladoB == ladoC) {
            return "Equilátero"
    } else if
        (ladoA == ladoB && ladoA != ladoC || ladoA == ladoC && ladoA != ladoB || ladoB == ladoC && ladoB != ladoA) {
            return "Isósceles"
    } else 
            return "Escaleno"
    }


// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   let obra =
{
    nome: 'O Diabo Veste Prada',
    ano: 2006,
    diretor: 'David Frankel',
    atores: ['Meryl Streep', ' Anne Hathaway', ' Emily Blunt', ' Stanley Tucci']
 }
 
return `Venha assistir ao filme ${obra.nome}, de ${obra.ano}, dirigido por ${obra.diretor} e estrelado por ${obra.atores}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}