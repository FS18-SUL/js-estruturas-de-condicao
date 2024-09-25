let nome;

// if(condição){
//     bloco de construção
//}

if(nome){
    document.write('Seja bem-vindo '+nome+'!');
} else {
    document.write('Seja bem-vindo!');
}

// let numero = prompt('Digite um numero');

// if(numero % 2 == 0){
//     console.log('É par');
// } else {
//     console.log('É impar');
// }
document.write('<br><br>');

let idade = prompt('Qual a sua idade?');
let habilitado = prompt('Possui habilitação');

if(idade >= 18 && habilitado == 'sim'){
    document.write('Pode dirigir')
} else {
    document.write('Não pode dirigir ainda');
}