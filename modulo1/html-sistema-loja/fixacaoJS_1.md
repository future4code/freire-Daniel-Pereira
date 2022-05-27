~~~javascript 
    function salarioFinal(valorCarro, carrosVendidos) {
    const salario = 2000
    let comissaoPorCarro = (valorCarro * 0.05) + 100
    //16250
    let commisaoTotal = comissaoPorCarro * carrosVendidos
    let salarioFinal = salario + commisaoTotal
    console.log(salarioFinal)
}
salarioFinal(65000,5)
~~~