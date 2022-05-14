let nota = 100;
let resultado;

if (nota >= 90) {
    resultado = "Sua nota foi A";
} else if (nota >= 80){
    resultado = "Sua nota foi B";
} else if (nota >= 70) {
    resultado = "Sua nota foi C";
} else if (nota >= 60) {
    resultado = "Sua nota foi D";
} else if (nota >= 50) {
    resultado = "Sua nota foi E";
} else if (nota < 50) {
    resultado = "Sua nota foi F"
} else {
    resultado = "ERRO - a nota informada é em porcentagem de 0 a 100"
}

console.log(resultado);
