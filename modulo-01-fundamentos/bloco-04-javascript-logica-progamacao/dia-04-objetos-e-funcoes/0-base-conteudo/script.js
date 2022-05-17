//EXERCICIO 1

let player = {
    name: "Marta",
    lastName: "Silva",
    age: 34,
    medals: {
        golden: 2,
        silver: 3,
    },

    bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018],
}

let nomeCompleto = player.fullName = player.name + " " + player.lastName
let vezesMelhorDoMundo = player.bestInTheWorld.length;


console.log("A jogadora " + nomeCompleto+ " tem " + player.age + " anos de idade.");
console.log("A jogadora " + nomeCompleto + " foi eleita a melhor do mundo " + vezesMelhorDoMundo + " vezes.");
console.log("A jogadora possui " + player.medals.golden + " medalhas de ouro e " + player.medals.silver + " medalhas de prata.");