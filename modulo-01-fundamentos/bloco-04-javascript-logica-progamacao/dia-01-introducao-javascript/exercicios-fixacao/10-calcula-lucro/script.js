const valorDeCusto = 10;
const valorDeVenda = 25;
const imposto = 20;
const calculoCustoTotal = (valorDeCusto * ((imposto / 100) +1));
const valorCustoTotal = calculoCustoTotal.toFixed(2);
const lucro = valorDeVenda - valorCustoTotal;
const quantidadeVendida = 1000;
let lucroTotal;

if (valorDeCusto > 0 && valorDeVenda > valorCustoTotal){
    lucroTotal = lucro * quantidadeVendida;
    let lucroFinanceiro = lucroTotal.toFixed(2);
    console.log(lucroFinanceiro);
} else {
    console.log ("Erro - Valores abixo de 0 ou Valor de venda abaixo do custo.");
}


