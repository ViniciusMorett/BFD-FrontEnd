//const frutas = ["maçã - 0", "banana - 1", "uva - 2"]
//for classico
//for(let i = 0; i < frutas.length; i++){
// console.log(`Fruta ${i}: ${frutas[i]}`)
//}

const arrayNumbers = [];
for (let value = 10; value <= 161; value *= 2) {
    arrayNumbers.push(value);
    //console.log("Valor" + value)
}

const numbers = [10, 20, 30, 40, 50];
for (const index in numbers) {
    //console.log(numbers [index])
}

const usuario = {
    nome: "Letícia",
    idade: 30,
};
//console.log(usuario)

const valorCubo = x => x ** 3;
console.log(valorCubo(1));
console.log(valorCubo(2));
console.log(valorCubo(3));
console.log(valorCubo(4));
console.log(valorCubo(5));

//aula dia 11/09