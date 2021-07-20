/**
 * @author:fantunes
 * 
 * O fluxo de controle loop.
 * 
 */

var number = 0
while (number <= 12){
    console.log(number)
    number = number + 2
}

var result = 1
var counter = 0
while ( counter < 10){
    result = result * 2
    counter = counter + 1
}
console.log(result)

//O loop abaixo força o usuario inserir o nome 
do{
    var name = prompt("Quem é Você?")
}while (!name)
console.log(name)

//Loop for para imprimir só número par 

for ( var number = 0; number <= 12; number = number + 2)
console.log(number)

var result = 1
//Repare que mesmo não abrindo o bloco { a declaração no loop continua indentada com dois espeços.
for ( var counter = 0; counter < 10; counter = counter +1)
    result = result * 2
    console.log(result)
// Quebrando a execução de um Loop

for ( var current = 20; ;current++){
    if (current % 7 == 0)
        break;
}
console.log(current)

/** * 
 * Para counter += e counter -= , existem equivalentes mais curtos: counter++ e counter-- 
 */

//Resolvendo um valor com SWITCH