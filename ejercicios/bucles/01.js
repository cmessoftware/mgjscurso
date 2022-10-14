
//Dado 5 numeros , calcular el promedio.

const numeros = []  //Definimos un array

function cargar(numero)
{
    if(isNaN(numero))
    {
        console.log("No es un numero")
        return 
    }

    numeros.push(numero)
 }

 function calcular_promedio(numeros)
 {
    let i=0
    let acum=0, promedio=0;
    for(i = 0 ; i <  numeros.length; i++)
    {
        acum += numeros[i]
    }

    promedio=acum/numeros.length

    return promedio

 }

 let i = 0
 let num
 while(i < 10)
 {
    num = Math.floor(Math.random() * (1000))
    cargar(num)
    i++
 }

 const prom =  calcular_promedio(numeros)
 console.log(`Promedio: ${prom}`)

