// Pide una nota (número). Muestra la calificación según la nota:
// 0-2: Muy deficiente
// 3-4: Insuficiente
// 5-6: Suficiente
// 7-8: Bien
// 9-10: Sobresaliente
// calificacion < o calificacion > 10 : Calificacion invalida.


function calificaciones (a)
{
    if (a < 0)
    {
        return("Calificación invalida")
    }
      
    else if (a <= 2)
    {
        return("Muy deficiente")

    }
    else if (a <= 4)
    {
        return("Insuficiente")
    }
    else if (a <= 6)  //Por que me tira error la siguiente expersión: if (a > 4 && a <=6)
          
    {
        return("Suficiente")
    }
    else if (a <=8)
    {
        return("Bien")
    }
    else if (a <=10 && a >8)
    {
        return("Sobresaliente")
    }
    else if (a>10)
    {
        return("Calificacion invalida")
    }

}

module.exports = {calificaciones}
//calificaciones(-1)