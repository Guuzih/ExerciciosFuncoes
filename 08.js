let stringPontuacoes = "30, 40, 20, 4, 51, 25, 42, 38, 56, 0"
 
 
function avaliaPontuacoes (pont) {
    let pontuacoes = pont.split(", ")
    let quebraRecorde = 0
    let pior = 1
    let maiorPontuacao = pontuacoes[0]
    let menorPontuacao = pontuacoes[0]

    for (let i = 1; i < pontuacoes.length; i++) {
        if(parseInt(pontuacoes[i]) > parseInt(maiorPontuacao)) {
            maiorPontuacao = pontuacoes[i]
            quebraRecorde++
        }else if (parseInt(pontuacoes[i]) < parseInt(menorPontuacao)) {
            menorPontuacao = pontuacoes[i]
            pior = i+1;
        }
    }
    return [quebraRecorde, pior]
}
 
console.log(avaliaPontuacoes(stringPontuacoes))