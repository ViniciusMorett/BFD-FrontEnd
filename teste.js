let usuario = "Viníciusj";
let senha = "Morett2007";

function verificar(usuario, senha) {
    if (usuario === "Vinícius" && senha === "Morett2007") {
        console.log("Você efetuou seu login!")
    }else {
        console.log("Usuário ou senha incorretos1")
    }
}

verificar(usuario, senha)
console.log("\n***************************************")


let corSemafaroCarro = "vermelho";
let corSemaforoPedestre = "verde";

if (corSemafaroCarro == "vermelho" && corSemaforoPedestre == "verde") {
    console.log("\nO sinal está vermelho para os carros, logo, o sinal de pedestre estará verde. Pedestres pode atravessar")
}else {
    console.log("O sinal está verde para os carros, logo, o sinal de pedestres estará vermelho. Pedestres não podem atravessar")
}
