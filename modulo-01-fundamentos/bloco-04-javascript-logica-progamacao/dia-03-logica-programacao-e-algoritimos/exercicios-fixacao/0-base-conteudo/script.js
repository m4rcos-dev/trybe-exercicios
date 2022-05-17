
  //LÓGICA|||\\
 //Algoritomos\\
//=============\\ 

//Exercicios 1 - Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();
//1. 1. Cria função for iniciando com um varievel em 0, determina que sera executado até a ultima possição do array e o incremento vai ser de 1 em 1.
//2. Cria função console.log para imprimir na tela o resultado de conteudo de cada posição percorrida.

//Exercico 2 - Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
//1. Cria uma variavel para armazenar o resultado das somas do conteudo do array, iniciando ela em 0.
//2. Cria função for iniciando com um varievel em 0, determina que sera executado até a ultima possição do array e o incremento vai ser de 1 em 1.
//3. Atribui a variavel criada no passo 1 a soma da propria variavel com o array numbers na posição da variavel criada no passo 2.
//4. Cria função console.log para imprimir na tela a variavel criada no passao 1.

//Exercicio 3 - Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
//1. Cria uma variavel para armazenar o resultado das somas do conteudo do array, iniciando ela em 0.
//2. Cria função for iniciando com um varievel em 0, determina que sera executado até a ultima possição do array e o incremento vai ser de 1 em 1.
//3. Atribui a variavel criada no passo 1 a soma da propria variavel com o array numbers na posição da variavel criada no passo 2.
//4. Cria uma variavel chamada media para armazenar a media e atribui a ela a variavel criada no passo 1 dividido pelo tamanho do array.
//5. Cria função console.log para imprimir na tela a variavel criada no passo 4.

//Exercicios 4 - Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
//1. Cria uma variavel para armazenar o resultado das somas do conteudo do array, iniciando ela em 0.
//2. Cria função for iniciando com um varievel em 0, determina que sera executado até a ultima possição do array e o incremento vai ser de 1 em 1.
//3. Atribui a variavel criada no passo 1 a soma da propria variavel com o array numbers na posição da variavel criada no passo 2.
//4. Cria uma variavel chamada media para armazenar a media e atribui a ela a variavel criada no passo 1 dividido pelo tamanho do array.
//5. Cria a função if para comparar se a variavel media criada no passo 4 é > 20.
//6. Caso o passo 5 seja true imprime na tela com console.log "valor maior que 20".
//7. Caso o passo 5 seja false imprime na tela com console.log "valor menor que 20".

//Exercicios 5 - Utilizando for, descubra qual o maior valor contido no array e imprima-o;
//1. Cria variavel maiorNumero para aramazenar o resultado iniciando atribuido o valor do array na posição 1.
//2. Cria função for declarando uma variavel começando em 0, determinar que sera executado até o final do array e incrementa de 1 em 1.
//3. Cria condição if para comparar se o array na posicão da variavel criada no passo 2 é maior que a variavel criada no passo 1.
//4. Caso o passo 3 seja true, atribui a variavel criado na passo 1 o valor contido na posição do array da variavel criada no passo 2.
//5. Cria função console.log para imprimir na tela a variavel criada no passo 1.

//Exercicio 6 - Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
//1. Cria uma variavel para armazenar a quantidade de numeros impares contidas no array iniciando em 0.
//2. Cria uma função for com uma variavel iniciada em 0, determina que ira percorrer até o final do array e incrementar de 1 em 1.
//3. Cria uma função if que vai comparar se o valor do resultado da divisão por 2 do valor contido no array na posição da variavel criada no passo 2 é igual a 1.
//4. Caso o passo 3 seja true atribui + 1 na variavel criada no passo 1.
//5. Cria uma if que vai comparar se a variavel criada no passo 1 é maior que 0.
//6. Caso o passo 6 seja true imprime na tela com console.log a variavel criada no passo 1.
//7. Caso o passo 6 seja false imprime na tela com console.log a mensagem "nenum numero ímpa encontrado".

//Exercicio 7 - Utilizando for, descubra qual o menor valor contido no array e imprima-o;
//1. Cria uma variavel para armazenar o menor número contido no array, iniciando com o valor contido no array na posição 0.
//2. Cria uma função for declarando uma variavel iniciando em 0, determina que ira percorrer até o final do array e incrementado de 1 em 1.
//3. Cria uma função if dentro do for do passo 2 que ira verificar se o valor contido no array na posição da varivel cirada no passo 2 é menor que a variavel criada no passo 1.
//4. Caso o passo 3 seja true é atribuido a variavel do passo 1 o valor contido no array na posição da variavel criada no passo 2.
//5. Cria função console.log para imprimir na tela a variavel criada no passo 1.

//Exercicio 8 - Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;
//1. Cria uma sem intens para armazenar os numeros de 1 a 25.
//2. Cria uma função for para declarando uma variavel iniciando em 0, determina que ira percorrer até 25 e incrementar de 1 em 1.
//3. Cria uma função push para atribuir ao array o numero da variavel criada no passo 2.
//4. Cria uma função console.log para imprimir na tela a variável criada no passo 1.

//Exercicio 9 - Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.
// 1. Na função push criada no passo 3 do exercicios anterior acrescenta a divisão por 2 o numero da variavel criada no passo 2.
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
    console.log("nenhum numero ímpar econtrado");
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




