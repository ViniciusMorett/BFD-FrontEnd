const usuario = { //obj js
    id: 1,
    nome: "Maria",
    ativo: true
}

const jsonString = JSON.stringify(usuario);
//console.log(jsonString);

const jsonRecebido = '{"id":1,"nome":"Maria","ativo":true}'
const dados1 = JSON.parse(jsonRecebido);
//console.log(dados1)

try {
    const dados = JSON.parse(jsonRecebido)
    console.log(dados.nome)
    console.log(dados.ativo)
} catch (e){
    console.log("Erro ao processar json:", e.message)
}


// GET

async function buscarUsuarios() {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!res.ok) {
            throw new Error(`Erro HTTP: ${res.status}`);
        }

        const dados = await res.json();
        console.log(dados);
    } catch (erro){
        console.log("Erro ao buscar usuários:", erro.message);
    }
}

buscarUsuarios();
