// Resolva o Exercício de Fixação!

const maiorDeIdade = (nome, anoNascimento, anoAtual) => {
    const verifica = anoAtual - anoNascimento >= 18 

    return `${nome} é maior de idade? ${verifica}`
}

console.log(maiorDeIdade(`Leonardo`,1987,2023));
console.log(maiorDeIdade(`Sapecôncio`,2018,2023));