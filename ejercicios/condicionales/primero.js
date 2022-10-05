//Dado los numeros min, max y num.
//Se pide indicar si num esta dentro del rango [min,max] , es menor a min o mayor a max.

const min = 0
const max = 100

function rango(num)
{
     if( num > max)
     {
        console.log("Es mayor al rango")
     }
     else if (num < min)
     {
        console.log("Es menor al rango")
     }
     else
        {
            console.log("Dentro del rango")
        }

}


//if anidados.
function rango2(num)
{
     if( num > max  || num < min)
     {
        console.log("Fuera de rango")

        if(num > max)
            console.log("Mayor que el  rango")
        else
            console.log("Menor que el  rango")
     }
     else
     {
        console.log("Dentro de rango")
     }
     
}

function rango3(num)
{
     if( num <= max  && num >= min)
     {
        console.log("Dentro de rango")

        if(num == min)
            console.log("Es igual al minimo")
        else
            console.log("Es igual al maximo")

     }
     else
     {
        console.log("Fuera de rango")

        if(num > max)
            console.log("Mayor que el  rango")
        else
            console.log("Menor que el  rango")
     }
     
}


rango3(0)

