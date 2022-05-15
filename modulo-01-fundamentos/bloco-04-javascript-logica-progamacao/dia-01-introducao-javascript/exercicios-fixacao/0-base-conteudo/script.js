//EXERCICIO 1 -  Variáveis

const myName = "Marcos Paulo";
const birthCity = "Monte Carmelo";
let birthYear = 1993;

birthYear = 2030

console.log (myName)
console.log (birthCity)
console.log (birthYear)

//EXERCICIO 2 - Tipos Primitivos, Tipagem Dinâmica e Operações Aritméticas

let patientId = '50';
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';

console.log (typeof patientId)


const base = 5;
let height = 8;
const area = base * height;

console.log (area)

let lado1 = 10;
let lado2 = 10;
let lado3 = 10
let somaPerimeter = lado1 + lado2 + lado3;
const perimeter = somaPerimeter;

console.log (perimeter);

//EXERCICIO 3 - Condições If e Else

const notaCandidata = 61;

if (notaCandidata >=80) {
    console.log ("Parabéns, vocês foi aprovada(o)!")
} else if (notaCandidata >=60) {
    console.log ("Você está na nossa lista de espera")
} else {
    console.log ("Você foi reprovada(o)")
}

// EXERCICIO 4 - Switch e Case

let situacao = "reprovada";

switch (situacao) {

    case "aprovada":
        console.log ("Parabéns, você esta aprovada(o)!");
        break;
    
    case "lista":
        console.log ("Você está na nossa lista de espera");
        break;

    case "reprovada":
        console.log ("Você foi repovada(o)!")
        break;
    
    default:
        console.log ("não se aplica")
}