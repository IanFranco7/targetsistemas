
// 2)Sequência de Fibonacci
function fibonnaci(numero){
    let n1= 0
    let n2= 1
    let soma
    let sequencia = []

    for(let contador = 0; contador <50; contador++){
        soma = n1 + n2; 
        n1 = n2
        n2 = soma
        sequencia.push(soma) //passando todos os valores que são somados para dentro de um array, para fazer a verificação se o número está presente ou não
    }
    
    if(!sequencia.includes(numero)){
        console.log('o numero não esta presente na sequência')
    }else{
        console.log('O número está presente na sequência')
    }
}

fibonnaci(4) //Saída: o numero não esta presente na sequência
fibonnaci(21) //Saída:O número está presente na sequência 

//3)Vetor

const dados =[
    '{"dia": 1, "valor": 22174.1664}',
    '{"dia": 2, "valor": 24537.6698}',
    '{"dia": 3, "valor": 26139.6134}',
    '{"dia": 4, "valor": 0.0}',
    '{"dia": 5, "valor": 0.0}',
    '{"dia": 6, "valor": 26742.6612}',
    '{"dia": 7, "valor": 0.0}',
    '{"dia": 8, "valor": 42889.2258}',
    '{"dia": 9, "valor": 46251.174}',
    '{"dia": 10, "valor": 11191.4722}',
    '{"dia": 11, "valor": 0.0}',
    '{"dia": 12, "valor": 0.0}',
    '{"dia": 13, "valor": 3847.4823}',
    '{"dia": 14, "valor": 373.7838}',
    '{"dia": 15, "valor": 2659.7563}',
    '{"dia": 16, "valor": 48924.2448}',
    '{"dia": 17, "valor": 18419.2614}',
    '{"dia": 18, "valor": 0.0}',
    '{"dia": 19, "valor": 0.0}',
    '{"dia": 20, "valor": 35240.1826}',
    '{"dia": 21, "valor": 43829.1667}',
    '{"dia": 22, "valor": 18235.6852}',
    '{"dia": 23, "valor": 4355.0662}',
    '{"dia": 24, "valor": 13327.1025}',
    '{"dia": 25, "valor": 0.0}',
    '{"dia": 26, "valor": 0.0}',
    '{"dia": 27, "valor": 25681.8318}',
    '{"dia": 28, "valor": 1718.1221}',
    '{"dia": 29, "valor": 13220.495}',
    '{"dia": 30, "valor": 8414.61}'
  ]
 
const transformandoEmObjeto = json => JSON.parse(json) //criação da função para transformar o json em um objeto JavaScript
const objetos = dados.map(transformandoEmObjeto) //transformei o json em um objeto JS
const apenasNumeros = objetos.map(numero => numero.valor) //peguei apenas os valores faturados de cada dia
const MaiorqueZero = apenasNumeros.filter(numero => numero > 0) //fiz a exclusão dos valores dos feriados ou fim de semana
const tamanho = MaiorqueZero.length

function media(){
    //Calculo da média
    let soma = 0
    MaiorqueZero.forEach(numero => soma+=numero)
    
    let media = soma / tamanho

    //Verificando quantos dias foram acima da média

    const acima = MaiorqueZero.filter(numero => numero > media)

    const dias = acima.length
    
    return dias
}

function CalculaTudo(){

    const maiorFaturamento = Math.max(...MaiorqueZero) //peguei o maior faturamento 
    const menorFaturamento = Math.min(...MaiorqueZero) //peguei o menor faturamento

    const totalDeDias = media() // peguei o total de dias

    console.log(`Maior faturamento em um dia: ${maiorFaturamento}, menor faturamento em um dia: ${menorFaturamento}, quantidade de dias que foram superior a média mensal: ${totalDeDias}`)
    
}

CalculaTudo() // Saída: Maior faturamento em um dia: 48924.2448, menor faturamento em um dia: 373.7838, quantidade de dias que foram superior a média mensal: 10

//4) Faturamento mensal de distribuidora

const faturamento = {
    'SP': 67836.43,
    'RJ': 36678.66,
    'MG': 29229.88,
    'ES': 27165.48,
    'Outros': 19849.53
  };
  
  let totalFaturamento = 0;

  function calculaFaturamento(){

    for (let estado in faturamento) {
        totalFaturamento += faturamento[estado];
      }
      
      for (let estado in faturamento) {
        const percentual = (faturamento[estado] / totalFaturamento) * 100; // Usei para pegar o percentual de faturamento de cada estado
        console.log(`${estado}: ${percentual.toFixed(2)}%`); // mostrei o faturamento de cada estado, limitando o valor a 2 casas decimais.
      }
  }

 calculaFaturamento() // Saída: SP: 37.53% RJ: 20.29% MG: 16.17%  ES: 15.03% Outros: 10.98%
 
// 5) Escreva um programa que inverta os caracteres de um string.

function inverterString(texto) {
    let novaString = '';
    for (let i = texto.length - 1; i >= 0; i--) { //usei o método .length para pegar a palavra começando de trás, facilitando a inversão
      novaString += texto[i]; // apenas concatenei letra por letra na nova palavra
    }
    return novaString;
  }
  
  console.log(inverterString('Olá, mundo!')); // Saída: '!odnum ,álO'
