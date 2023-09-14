function jurosSimples (inicial, taxa, tempo) {
    return inicial + (inicial * taxa * tempo)
}

function jurosCompostos (inicial, taxa, tempo) {
    return inicial * (1 + taxa) ** tempo
}

console.log(jurosSimples(100, 10/100, 2));
console.log(jurosCompostos(100, 10/100, 2));
