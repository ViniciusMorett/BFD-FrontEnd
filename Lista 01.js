//Lista 01 de exercícios de JS. A saída dos códigos está expressa em comentário para melhor entendimento, do que no terminal.

// Questão 1
let nome = "Vinícius";   
const idade = 18;        

console.log(typeof nome);  // string
console.log(typeof idade); // number

// Questão 2
function verificarNumero(numero) {
  if (numero > 0) {
    return "O número é positivo";
  } else {
    if (numero < 0) {
      return "O número é negativo";
    } else {
      return "O número é zero";
    }
  }
}

console.log(verificarNumero(10));   // O número é positivo
console.log(verificarNumero(-5));   // O número é negativo
console.log(verificarNumero(0));    // O número é zero

// Questão 3
function parOuImpar(numero) {
  if (numero % 2 === 0) {
    return "Par";
  } else {
    return "Ímpar";
  }
}

console.log(parOuImpar(4));  // Par
console.log(parOuImpar(7));  // Ímpar

// Questão 4
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Questão 5
function somaAteN(n) {
  let soma = 0;
  for (let i = 1; i <= n; i++) {
    soma += i;
  }
  return soma;
}

console.log(somaAteN(5));  // 15
console.log(somaAteN(10)); // 55

// Questão 6
let i = 10;
while (i >= 1) {
  console.log(i);
  i--;
}

// Questão 7
function tabuada(numero) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
  }
}

tabuada(5);
/*
Saída:
5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
5 x 4 = 20
5 x 5 = 25
5 x 6 = 30
5 x 7 = 35
5 x 8 = 40
5 x 9 = 45
5 x 10 = 50
*/

// Questão 8
function utilOuNao(dia) {
  switch(dia) {
    case "segunda":
    case "terça":
    case "quarta":
    case "quinta":
    case "sexta":
      return "Dia útil";
    case "sábado":
    case "domingo":
      return "Dia não útil";
  }
}

console.log(utilOuNao("segunda")); // Dia útil
console.log(utilOuNao("sexta"));   // Dia útil
console.log(utilOuNao("domingo")); // Dia não útil

// Questão 9
function apresentar(nome, idade, cidade) {
  return `Meu nome é ${nome}, tenho ${idade} anos e moro em ${cidade}.`;
}

console.log(apresentar("Vinícius Morett", 18, "Jaboatão dos Guararapes"));

// Questão 10
function numerosPares(array) {
  let pares = [];
  let iPar = 0; 
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      pares[iPar] = array[i];
      iPar++;
    }
  }
  return pares;
}

console.log(numerosPares([1, 2, 3, 4, 5, 6])); // [2, 4, 6]