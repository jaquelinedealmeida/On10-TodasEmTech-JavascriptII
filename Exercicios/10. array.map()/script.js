const usuarios = [
    {user:234, name: 'Marcia', idade:40 },
    {user:235, name: 'Lorena', idade:20 },
    {user:236, name: 'Patricia', idade:24 },
    {user:237, name: 'Mariana', idade:15 },
    {user:238, name: 'Isis', idade:34 },
    {user:239, name: 'Pietra', idade:23 }
]

const textoResultado = usuarios.map((participantes) => { 
return  `Nome: ${participantes.name}, idade:${participantes.idade}`
}); 

console.log(participantes);

//const nomes = usuarios.map((pessoas) => {

//return `O usuário número ${participante.user} se chama ${participante.name} e tem ${participante.idade} anos`;
});

//console.log(nomes);
