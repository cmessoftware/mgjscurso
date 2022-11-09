
function ej()
{
    let a = 1;
    a = a + 1
    console.log(a)  
}


//Toma elemento a elemento y realiza la operacion de la funciona flecha que 
//toma como parametro.
arr = [1,4,-1,8,11]
arrSalida = []
console.log(arr)
let result = 0

//Forma clasica
for(let x=0 ; x < arr.length; x++)
   result  = result +  arr[x]

console.log(result)

//Usando funcion explicita como parametro del reduce
//Recibe un acumulador y el elemento actual
result = arr.reduce(function(total, num){
    return total + num; 
});

//Usando funcion flecha con return explicito
result = arr.reduce((total, num) => {
    return total + num; 
});
console.log(result)

//Compacto en una sola linea
result = arr.reduce((total, num) => total + num);


console.log(result)

function filtrar()
{
    arr = [1,4,-1,8,11]
    arrSalida = []
    console.log(arr)
    let j= 0
    //Mostrar un array nuevo con los elementos mayores a 4
    for(let x=0 ; x < arr.length; x++)
    {
        if(arr[x] > 4)
        {
            arrSalida[j] = arr[x]
            j++
        }
    }

    console.log(arrSalida)

    arrSalida =  arr.filter(e => {
        return e > 1
    })
    
    console.log(arrSalida)
}





function map()
{
    arr = [1,4,-1,8,11]
    arrSalida = []
    console.log(arr)

    for(let x=0 ; x < arr.length; x++)
        arrSalida[x] = arr[x]*arr[x]

    console.log(arrSalida)

    arrSalida = arr.map(element => {
        return element*element+1
    })

    console.log(arrSalida)
    console.log(arr)
}




function recorrer()
{
    arr = [1,4,-1,8,11]
    console.log(arr)

    for(let x=0 ; x < arr.length; x++)
        console.log(arr[x])

    arr.forEach(element =>{
        element = element*element
        console.log(element)
    });
}



function definicion()
{
    arreglo = []

    arreglo.push(1)
    arreglo.push(4)
    arreglo.push(-1)
    arreglo.push(8)
    arreglo.push(11)

    console.log(arreglo)
}
