//Dado los numeros min, max y num.
//Se pide indicar si num esta dentro del rango [min,max] , es menor a min o mayor a max.

const MIN = 0
const MAX = 10

function rango(num,min,max)
{
     if( num > max)
     {
        return ("Mayor al maximo del rango")
     }
     else if (num < min)
     {
        return ("Menor al minimo del rango")
     }
     else if(num == min)
     {
        return "Es igual al minimo"
     }
     else if(num == max)
     {
        return "Es igual al maximo"
     }
   
     return ("Dentro del rango")
   
}


//if anidados.
function rango2(num,min,max)
{
     if( num > max  || num < min)
     {
     
        if(num > max)
            return ("Mayor al maximo del rango")
        else
            return ("Menor al minimo del rango")
     }
     else
     {
        return ("Dentro de rango")
     }
     
}

function rango3(num,min,max)
{
     if( num <= max  && num >= min)
     {
     
        if(num == min)
            return ("Es igual al minimo")
        else
            return ("Es igual al maximo")

     }
     else
     {
        if(num > max)
            return ("Mayor al maximo del rango")
        else
            return ("Menor al minimo del rango")
     }
     
}


module.exports = rango

