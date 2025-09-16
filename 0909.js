//Aula dia 09/09

const num1 = [1, 2];
const num2 = [4, 6];

const todosNum = [...num1, ...num2];
const copia = [...num1];
const novo = [0, 1, 2, ...num1, 3, 4]

Math.max(...num1, ...num2)

const items = [..."Vinícius Morett"];

const pessoa = {
    nomePessoa: "João",
    altura: 1.75,
    cor: "Pardo",
}

const profissao = {
    nomeProfissao: "Desenvolvedor Web pleno",
    salario: "3k - 5k",
    formacao: "Faculdade",
}

const tudoJunto = {
    ...pessoa,
    ...profissao,
}
console.log(tudoJunto)
