//EXERCICIO 1 E 2
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: "sim",
};

console.log("Bem vinda! " + info.personagem);
console.log(info);

//EXERCICIO 3 E 4.
for (let key in info) {
    console.log(key);
}

for (let key in info) {
    console.log(info[key]);
}

//EXERCICIO 5

let info2 = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: "sim",
}

let keyInfo;
let keyInfo2;

for (let key in info){
    keyInfo = info[key];
}
for (let key2 in info2) {
    keyInfo2 = info[key2];
}

console.log(keyInfo, keyInfo2);