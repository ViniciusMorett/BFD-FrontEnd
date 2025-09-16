function saudacao(nome){
    const menssagem = `Olá, ${nome}`

    function mostrarSaudacao(){
        console.log(menssagem);
    }
    return mostrarSaudacao;
}
const olaVinicius = saudacao("Vinícius");
olaVinicius();

const users = [
    {name: "Mariana", age: 25, tel: "+71987680936", city: "Salvador"},
    {name: "João S.", age: 30, tel: "+11934680766", city: "São Paulo"},
    {name: "Ana S.", age: 25, tel: "+71989280486", city: "Salvador"},
];

const contagem = users.reduce((acc, user)=>{
    acc[user.city] = (acc[user.city] || 0 ) +1;
    return acc;
}, {});

const contagem1 = users.reduce((acc, user)=>{
    acc[user.age] = (acc[user.age] || 0 ) +1;
    return acc;
}, {});
const contagem2 = users.reduce((acc, user)=>{
    acc[user.tel] = (acc[user.tel] || 0 ) +1;
    return acc;
}, {});
console.log(contagem)
console.log(contagem1)

const somaDasIdades = users.reduce((acc, user)=>{
    return acc + user.age;
}, 0);
console.log(somaDasIdades)

const mediaDasIdades = somaDasIdades / users.length;
console.log(mediaDasIdades)