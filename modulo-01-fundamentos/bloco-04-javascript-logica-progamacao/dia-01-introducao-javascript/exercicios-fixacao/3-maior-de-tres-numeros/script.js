const a = 30;
const b = 300;
const c = 30;
let resultado;

if (a > b && a > c) {
    resultado = a;
} else if (b > a && b > c) {
    resultado = b;
} else {
    resultado = c;
}

console.log (resultado);
