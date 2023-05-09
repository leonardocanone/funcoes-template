// Acompanhe a Prática Guiada e repita o exercício no Momento de Réplica!

// Forma principal de declarar funçoes, forma mais comum
function calcularArea(altura, largura){
	const area = altura*largura;
	console.log(area);
}

calcularArea(3,2); // o resultado no Console é 6
calcularArea(5,3)  // aqui o resultado é 15 

// Declarando a mesma função acima porém como funçao não-nomeada, que gera o mesmo resultado
const calcularArea2 = function(altura, largura){
	const area = altura*largura;
	console.log(area);
}

calcularArea2(3,2);

// Por fim, declaramos a mesma função novamente, mas agora como Arrow function
const calcularArea3 = (altura, largura) => {
	const area = altura*largura;
	console.log(area);
}

calcularArea3(3,2);

// Outros testes
function myFunction(param1){
    return param1*param1
}

const myConst = myFunction(6);
console.log(myConst);
// aqui o resultado no console será 36

const minhaFuncao = () => { 
    return "Olá, mundo!"
}

console.log(minhaFuncao());
// Neste caso aqui do questionário, faltou colocar os parentesis de função vazia ao lado do nome da função no console.log da linha acima (41)

// fim dos testes

// Agora assim a aula de Funçoes

// Prática Guiada 1 de 3

// função no formato convencional 
function imprimirNome(nome){
    console.log(`Olá, ${nome}!`);
} 

imprimirNome('Leonardo')
imprimirNome('Luiz')
imprimirNome('Lygia')

// função no formato não-nomeada, ou função anônima, ou também expressão de função
const imprimirNome2 = function(nome){
    console.log(`Olá, ${nome}!`);
}

imprimirNome2('Leonardo')
imprimirNome2('Luiz')

// por fim, a função escrita no formato Arrow function, que é a mais utilizada pelos professores da Labenu.
const imprimirNome3 = (nome) =>{
    console.log(`Olá, ${nome}!`);
}

imprimirNome3('Leonardo')
imprimirNome3('Luiz')


// Prática Guiada 2 de 3

function unirOperacoes(numero) {
    const verifica = numero % 2 === 0
    const soma = numero + 10
    const multiplica = numero * numero

    return `O número ${numero} é par? ${verifica}. Somado com 10, o resultado é ${soma}. Multiplicado por ele mesmo, o resulltado é ${multiplica}.`
}

console.log(unirOperacoes(12))
console.log(unirOperacoes(5));

// Extra 1 - código na linha abaixo, foi comentado para seguir com a prática guiada e tirar a mensagem de erro.
// console.log(soma)
// Tentamos acessar a variável soma fora da função, e o resultado foi: Uncaught ReferenceError: soma is not defined. Isso ocorreu pois a função soma está no Escopo Local. Sendo assim, variáveis no escopo local somente podem ser acessadas dentro do escopo em que foram declaradas.

// Extra 2 - não fizemos o Extra 2


// Prática Guiada 3 de 3

const verificaDados = (login, senha) => {
    const loginArmazenado = "leo@email.com"
    const senhaArmazenado = "123456"

    return loginArmazenado === login && senhaArmazenado === senha
}

console.log(verificaDados("leo@email.com","123456"))

// fim da Prática guiada de Funções.

// Agora o Exercício de fixação

const maiorDeIdade = (nome, anoNascimento, anoAtual) => {
    const verifica = anoAtual - anoNascimento >= 18 

    return `${nome} é maior de idade? ${verifica}`

}

console.log(maiorDeIdade(`Leonardo`,1987,2023));
console.log(maiorDeIdade(`Sapecôncio`,2018,2023));


