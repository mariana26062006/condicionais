// const numero = Number(prompt("digite um numero"))
// const outroNumero = Number(prompt("digite outro numero"))

// if(numero >outroNumero) {
//     console.log(`${numero} é maior que ${outroNumero}`);
// } else if(outroNumero > numero){
//     console.log(`${outroNumero} é maior que ${numero}`);
// }else{
//     console.log(`${outroNumero} é igual ao ${numero}`);

// }

// // validar se o numero

// if(numero % 2 === 0){
//     console.log("o numero é par");
// }else{
//     console.log("o numero é impar");
// }

// const user = prompt("digite seu pokemon: ")

// switch (user) {
//     case 'squrtele':
//         console.log('squrtele');
//         break;
//     case 'bulbassauro':
//         console.log('bulbassauro');
//         break;
//     case 'charmander':
//         console.log('charmander');
//         break;
    

//     default:
//         break;
// }

// let user = prompt("voce concluiu o ensino medio")
// let user2 = prompt("quantos anos você tem?")
// let user3 = prompt("voce esta cursando algo?")

// function receber(ensino, anos, facul){
//     if(ensino === `$` && anos >= 16 &&
//     facul === `$`){
//         console.log("voce pode estudar")
//     } else {
//         console.log("voce nao pode estudar")

//     }
// }

// receber(user, user2, user3)



// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if (numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }

// a) Explique o que o código faz. Qual o teste que ele realiza? O codigo pergunta pro usuario
// "Digite o número que você quer testar", ai se for par ele passa, se for impar ele nao passa.

// b) Para que tipos de números ele imprime no console "Passou no teste"? Numeros pares

// c) Para que tipos de números a mensagem é "Não passou no teste"? para numeros impares


// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     break; // BREAK PARA O ITEM c.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

// a) Para que serve o código acima? o codigo acima serve para anunciar o vaor da fruta

// b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`? "O preço da fruta  maçã  é  R$  5"

// c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se 
//retirássemos o `break` que está logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?
// aparecerá "O preço da fruta  pêra  é  R$  5"

// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//   console.log("Esse número passou no teste")
// 	let mensagem = "Essa mensagem é secreta!!!"
// }

// console.log(mensagem)

// a) O que a primeira linha está fazendo? a primeira linha esta pedindo para o usuario digitar o primeiro numero

// b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?

// c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo. a variavel 'mensagem' deveria ter cido definida fora da função if


//1. a) b)

let idade = Number(prompt("quantos anos voce tem?"))

// 1. c) 

idade >= 18?
console.log("voce pode dirigir"):
console.log("você não pode dirigir");

// 2.
turno = prompt("em que turno do dia você estuda? digite M para matitunio , V para vespertino e N para noturno").toUpperCase;

if(turno === "M"){
    console.log("bom dia!");
}
else if(turno === "V"){
    console.log("boa tarde!");
}
else if(turno === "N"){
    console.log("boa noite!");
}else{
    console.log("houve um erro de digitação")
}

//3.
switch(turno){
    case "M":
        console.log("bom dia!");
        break;
    case "V":
        console.log("boa tarde!");
        break;
    case "N":
        console.log("boa noite!");
        break;
    default:
        console,log("houve um erro de digitação.");
        break;
}

//4.
let genero = prompt("a que gênero de filme você assistirá?").toLocaleLowerCase()
let precoIngresso = prompt("quanto o ingresso custa?")
if(genero == "fantasia" && precoIngresso < 15){
    console.log("bom filme!");
}else{
    console.log("escolha outro filme :(");
}
