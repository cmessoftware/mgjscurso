// 1- Usar la constante EXPECTED_MINUTES_IN_OVEN definida en 40
// 2- Hacer una funcion remainingMinutesInOven(minutos) --> minutos que pasaron
// 3- preparationTimeInMinutes(cant_capas)
// Por cada capa adicional el horneado tarda 2 min mas
// 4- preparationTimeInMinutes(can_capas, minutos)



const EXPECTED_MINUTES_IN_OVEN = 40

function remainingMinutesInOven(minutos)
{ 
    return EXPECTED_MINUTES_IN_OVEN - minutos

}

function preparationTimeInMinutes(cant_capas)
{

}

function totalTimeInMinutes(cant_capas,minutos)
{
    
}

module.exports = {totalTimeInMinutes,preparationTimeInMinutes,remainingMinutesInOven,EXPECTED_MINUTES_IN_OVEN}