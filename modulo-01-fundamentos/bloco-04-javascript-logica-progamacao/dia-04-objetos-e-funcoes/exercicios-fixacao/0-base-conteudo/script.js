//OBJETOS
//EXERCICIO 1 AO 5.

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


console.log("A jogadora " + nomeCompleto + " tem " + player.age + " anos de idade.");
console.log("A jogadora " + nomeCompleto + " foi eleita a melhor do mundo " + vezesMelhorDoMundo + " vezes.");
console.log("A jogadora possui " + player.medals.golden + " medalhas de ouro e " + player.medals.silver + " medalhas de prata.");

//FOR IN & FOR OFF
//EXERCICIO 1
let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
};

for (let key in names) {
    console.log("Olá " + names[key]);
}

//EXERCICIO 2
let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
};

for (let chave in car) {
    console.log(chave, car[chave]);
}

//FUNÇÕES
// 1.

function somarNumeros(a, b) {
    let resultado = a + b;
    return resultado;
}

console.log(somarNumeros(2, 3));

//2.

function maiorNumero(a, b) {
    if (a > b) {
        return "'a' é maior que 'b'";
    }
    return "'b' é maior 'a'";
}

console.log(maiorNumero(10, 30));

//3.

function maiorDeTres(a, b, c) {
    if (a > b && a > c) {
        return "'a' é maior que 'b' e 'c'";
    }
    if (b > a && b > c) {
        return "'b' é maior que 'a' e 'c'"
    }
    return "'c' é maior que 'b' e 'a'";
}

console.log(maiorDeTres(50, 100, 30));

//4. 

function negativePositive(a) {
    if (a > 0) {
        return "positive";
    }
    if (a < 0) {
        return "negative";
    }
    return "zero";
}

console.log(negativePositive(-5));

//5.

function angulosTriangulo(a, b, c) {
    let somaAngulos = a + b + c;
    let angulosPositivos = a > 0 && b > 0 && c > 0;

    if (angulosPositivos) {
        if (somaAngulos === 180) {
            return true;
        }
        return false;
    };
    return "Erro: angulos inválidos.";
}

console.log(angulosTriangulo(0, 60, 60));