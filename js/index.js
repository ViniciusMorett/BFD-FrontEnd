let usuario = "Viníciusj";
let senha = "Morett2007";

function verificar(usuario, senha) {
    if (usuario === "Vinícius" && senha === "Morett2007") {
        console.log("Você efetuou seu login!");
    } else {
        console.log("Usuário ou senha incorretos1");
    }
}

verificar(usuario, senha);
console.log("\n***************************************");

let corSemafaroCarro = "vermelho";
let corSemaforoPedestre = "verde";

if (corSemafaroCarro == "vermelho" && corSemaforoPedestre == "verde") {
    console.log(
        "\nO sinal está vermelho para os carros, logo, o sinal de pedestre estará verde. Pedestres pode atravessar"
    );
} else {
    console.log(
        "O sinal está verde para os carros, logo, o sinal de pedestres estará vermelho. Pedestres não podem atravessar"
    );
}

let idade = 19;

if (idade >= 18) {
    console.log("\nÉ maior de idade!");
} else console.log("\nNão é maior de idade!");

let myNumber = 30;
let numberMinor = 15;
let numberMajor = 200;

if (myNumber >= numberMinor && myNumber <= numberMajor) {
    console.log("\nO número está dentro do intervalo.");
} else {
    console.log("\nO número está fora do intervalo");
}

let numero = 4;

if (numero % 2 === 0) {
    console.log("\nO número é par");
} else {
    console.log("\nO número é ímpar");
}


 