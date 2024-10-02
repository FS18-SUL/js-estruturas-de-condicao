// let nome;

// if(condição){
//     bloco de construção
//}

// if(nome){
//     document.write('Seja bem-vindo '+nome+'!');
// } else {
//     document.write('Seja bem-vindo!');
// }

// let numero = prompt('Digite um numero');

// if(numero % 2 == 0){
//     console.log('É par');
// } else {
//     console.log('É impar');
// }

// document.write('<br><br>');

// let idade = prompt('Qual a sua idade?');
// let habilitado = prompt('Possui habilitação');

// if(idade >= 18 && habilitado == 'sim'){
//     document.write('Pode dirigir')
// } else {
//     document.write('Não pode dirigir ainda');
// }




/// Questao 1

// let numero = prompt('Digite um numero');

// if( numero == 0) document.write('O numero é zero');
// else if (numero <= 0) document.write('O número é negativo');
// else document.write('O número é positivo');

/// Questao 2

// const ladoA = prompt('digite o comprimento a')
// const ladoB = prompt ('digite o comprimento b')
// const ladoC = prompt ('digite o comprimento c')

// if(ladoA === ladoB && ladoB === ladoC) {
//     document.write('o triangulo é equilatero')
// } else if (ladoA != ladoB && ladoB != ladoC && ladoA != ladoC) {
//     document.write('o triangulo é escaleno')
// } else {
//     document.write ('o triângulo é isósceles')
// }

/// Questao 3

// let ano = prompt('Digite um ano');
// if(ano % 4 == 0){
//     document.write('O ano '+ano+' é bissexto')
// } else {
//     document.write('O ano '+ano+' não é bissexto')
// }

/// Questao 4

// let numeroUm = Number(prompt('Digite o primeiro número'));
// let numeroDois = Number(prompt('Digite o segundo número'));
// let numeroTres = Number(prompt('Digite o terceiro número'));

// if(numeroUm > numeroDois && numeroUm > numeroTres){
//     document.write('O maior é o número '+numeroUm);
// } else if (numeroDois > numeroUm && numeroDois > numeroTres ){
//     document.write('O maior número é '+numeroDois);
// } else {
//     document.write('O maior número é o '+numeroTres);
// }

/// Questao 6

// let preco = Number(prompt('Digite o preço'));
// let qnt = Number(prompt('Digite a quantidade'));

// if(qnt > 10){
//     let totalAPagar = qnt * preco;
//     let desconto = totalAPagar / 10;
//     document.write('Valor a pagar: '+ (totalAPagar - desconto));
// } else {
//     document.write('Valor a pagar: '+ (qnt * preco));
// }

/// Questao 7

let nota = prompt('Digite sua nota de 0 a 100');

if(nota > 100 || nota < 0){
    nota = prompt('Digite uma nota válida!');
}

if(nota > 79 && nota <= 100){
    document.write('Nota conceito A');
}else if(nota <= 79 && nota >= 60){
    document.write('Nota conceito B');
}else if(nota <= 59 && nota >= 40){
    document.write('Nota conceito C');
}else if(nota <= 39 && nota >= 20){
    document.write('Nota conceito D');
}else{
    document.write('Nota conceito F');
}

