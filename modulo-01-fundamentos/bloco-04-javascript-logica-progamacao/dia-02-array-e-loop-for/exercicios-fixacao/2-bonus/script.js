//=========\\
//BUBBLE SORT\\
//=============\\

//EXERCICIO 1
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < numbers.length; index += 1) { //1 - PERCORRE TODO ARRAY A PARTIR DA POSIÇÃO 1 ATÉ O FINAL.
    for (index2 = 0; index2 < index; index2 += 1) {//2 - PERCORRE O MESMO ARRAY A PARTIR DA POSIÇÃO 0 ATÉ O FINAL DO INDEX ANTERIOR.
        if (numbers[index] < numbers[index2]) {//3 -COMPARA SE A POSIÇÃO INDEX É MENOR QUE A POSIÇÃO INDEX2.
            let position = numbers[index];//4 -SE FOR MENOR ELE ARMAZENA O VALOR QUE ESTA NA POSIÇÃO INDEX EM UMA VARIAVEL.
            numbers[index] = numbers[index2];//5 -SUBSTITUI O VALOR QUE ESTA NA POSIÇÃO INDEX PELO VALOR DA POSIÇÃO INDEX 2.
            numbers[index2] = position;//6 -ATRIBUI O VALOR ARMAZENADO NA VARIAVEL DO PASSO 4 A POSIÇÃO INDEX2.
        }

    }
}
console.log(numbers); //7 - MOSTRA NA TELA O ARRAY NUMBERS ORGANIZADO DE FORMA CRESCENTE.

//===================================================================================================================================\\
//|QUANDO TEMOS UM FO DENTRO DO OUTRO PARA CADA UMA POSIÇÃO EXECUTADA DA LADO DE FORA ELE PERCORRE TODAS AS POSIÇÕES DO FOR DE DENTRO.|\\
//=======================================================================================================================================\\
_____________________________________________________________________________________________________________________________________________________
//EXERCICIO2
let numbers2 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index3 = 1; index3 < numbers2.length; index3 += 1) { //1 - PERCORRE TODO ARRAY A PARTIR DA POSIÇÃO 1 ATÉ O FINAL.
    for (let index4 = 0; index4 < index3; index4 += 1) {//2 - PERCORRE O MESMO ARRAY A PARTIR DA POSIÇÃO 0 ATÉ O FINAL DO INDEX3 ANTERIOR.
        if (numbers2[index3] > numbers2[index4]) {//3 -COMPARA SE A POSIÇÃO INDEX3 É MAIOR QUE A POSIÇÃO INDEX4.
            let position2 = numbers2[index3];//4 -SE FOR MAIOR ELE ARMAZENA O VALOR QUE ESTA NA POSIÇÃO INDEX3 EM UMA VARIAVEL.
            numbers2[index3] = numbers2[index4];//5 -SUBSTITUI O VALOR QUE ESTA NA POSIÇÃO INDEX3 PELO VALOR DA POSIÇÃO INDEX4.
            numbers2[index4] = position2;//6 -ATRIBUI O VALOR ARMAZENADO NA VARIAVEL DO PASSO 4 A POSIÇÃO INDEX3.
        }

    }
}
console.log(numbers2); //7 - MOSTRA NA TELA O ARRAY NUMBERS ORGANIZADO DE FORMA DECRESCENTE.

_____________________________________________________________________________________________________________________________________________________
//EXERCICIO 3

let numbers3 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let multiplicado = [];
let posicao1;
let posicao2;

for (let contador = 0; contador < numbers3.length; contador += 1) {
    for (let contador2 = 1; contador2 < numbers3.length; contador2 += 1) {
        posicao1 = numbers3[contador];
        posicao2 = numbers3[contador2];
    if(contador < contador2){
        multiplicado.push(posicao1 * posicao2);
     }
    }
}

console.log(multiplicado);

