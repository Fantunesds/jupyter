/** * 
 * @author fantunes
 * 
 * estudo de condicional IF ELSE. * 
 */



// alert("Hell world")

var theNumber = Number(prompt("Escolha um Número:",""))
if(!isNaN(theNumber))
    alert("Seu número é a raiz quadrada de " + theNumber * theNumber)
else
    alert("Ei por que você não me deu um número")

var num = Number(prompt("Escolha um Número", "0"))

    if( num < 10)
        document.write("Pequeno")
    else if ( num < 100)
        Document.write("Médio")
    else 
        document.write("Grande")