________________________________________________________________________________
//EXERCICIOS 1 A0 4.

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let valoresSomados = 0;
let media = 0;

for (let index = 0; index < numbers.length; index += 1) {
    valoresSomados = valoresSomados + numbers[index];
}

media = valoresSomados / numbers.length;

if (media > 20) {
    console.log("valor maior que 20")
} else {
    console.log("valor menor ou igual a 20")
}
________________________________________________________________________________
//EXERICIOS 5 
let numbers2 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiorNumero = numbers2[0];

for (let index2 = 0; index2 < numbers2.length; index2 += 1) {
    if (numbers2[index2] > maiorNumero) {
        maiorNumero = numbers2[index2];
    }
}

console.log(maiorNumero);
________________________________________________________________________________
//EXERCICIO 6
let numbers3 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let valoresimpares = 0;

for (let index3 = 0; index3 < numbers3.length; index3 += 1) {
    if (numbers3[index3] % 2 === 1) {
        valoresimpares += 1;
    }
}

if (valoresimpares > 0) {
    console.log(valoresimpares);
} else {
    console.log("nenhum valor ímpar econtrado");
}
________________________________________________________________________________
//EXERCICIO 7
let numbers4 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menorNumero = numbers4[0];

for (let index4 = 0; index4 < numbers4.length; index4 += 1) {
    if (numbers4[index4] < menorNumero) {
        menorNumero = numbers4[index4];
    }
}

console.log(menorNumero);

________________________________________________________________________________
//EXERCICIO 8 e 9

let de1a25 = [];

for (let index5 = 1; index5 <= 25; index5 += 1) {
    de1a25.push(index5 / 2)
}

console.log(de1a25);




