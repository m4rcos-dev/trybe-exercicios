const angulo1 = -60;
const angulo2 = -60;
const angulo3 = -60;
let somaAngulos = angulo1 + angulo2 + angulo3; // Soma todos angulos
let angulosPositivos = angulo1 > 0 && angulo2 > 0 && angulo3 > 0; //Verifica se todos os angulos informados são maior que 0.

if (angulosPositivos){
    if (somaAngulos === 180) {
        console.log (true);
    } else {
        console.log (false);
    };
} else {
    console.log ("Erro: angulos inválidos.")
}

