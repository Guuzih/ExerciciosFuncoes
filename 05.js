function formatarValorDecimal(decimal) {

    valorEmReais = `R$ ${decimal.toFixed(2).toString().replace(".", ",")}`
    console.log(valorEmReais)

}

formatarValorDecimal(0.1 + 0.2)