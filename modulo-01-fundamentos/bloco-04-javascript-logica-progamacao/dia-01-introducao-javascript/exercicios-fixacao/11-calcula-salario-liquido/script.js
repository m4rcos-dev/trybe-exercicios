const salarioBruto = 10000;
let salarioComInss;
let salarioComIr;
let salarioLiquido;

if (salarioBruto <= 1556.94) {
    salarioComInss = salarioBruto - (8 / 100 * salarioBruto);
} else if (salarioBruto <= 2594.92) {
    salarioComInss = salarioBruto - (9 / 100 * salarioBruto);
} else if (salarioBruto <= 5189.82) {
    salarioComInss = salarioBruto - (11 / 100 * salarioBruto);
} else {
    salarioComInss = salarioBruto - 570.88;
};

if (salarioComInss <= 1903.98) {
    salarioComIr = salarioComInss;
} else if (salarioComInss <= 2826.65) {
    salarioComIr = (7.5 / 100 * salarioComInss) - 142.80;
} else if (salarioComInss <= 3751.05) {
    salarioComIr = (15 / 100 * salarioComInss) - 354, 80;
} else if (salarioComInss <= 4664.68) {
    salarioComIr = (22.5 / 100 * salarioComInss) - 636.13;
} else {
    salarioComIr = (27.5 / 100 * salarioComInss) - 869.36;
};

if (salarioComInss > 1903.98) {
    salarioLiquido = salarioComInss - salarioComIr;
} else {
    salarioLiquido = salarioComInss;
};

console.log(salarioLiquido.toFixed(2));
