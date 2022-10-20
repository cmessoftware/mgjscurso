// 1- Usar la constante EXPECTED_MINUTES_IN_OVEN definida en 40
// 2- Hacer una funcion remainingMinutesInOven(minutos) --> minutos que pasaron
// 3- preparationTimeInMinutes(cant_capas)
// Por cada capa adicional el horneado tarda 2 min mas
// 4- preparationTimeInMinutes(can_capas, minutos)

// expect(EXPECTED_MINUTES_IN_OVEN).toBe(40);
// expect(remainingMinutesInOven(25)).toBe(15);
// expect(remainingMinutesInOven(5)).toBe(35);
// expect(remainingMinutesInOven(39)).toBe(1);
// expect(remainingMinutesInOven(40)).toBe(0);
// expect(remainingMinutesInOven(0)).toBe(40);
// expect(preparationTimeInMinutes(1)).toBe(2);
// expect(preparationTimeInMinutes(2)).toBe(4);
// expect(preparationTimeInMinutes(8)).toBe(16);
// expect(totalTimeInMinutes(1, 5)).toBe(7);
// expect(totalTimeInMinutes(4, 15)).toBe(23);
// expect(totalTimeInMinutes(1, 35)).toBe(37);

const EXPECTED_MINUTES_IN_OVEN = 40

function remainingMinutesInOven(minutos)
{ 
    return(EXPECTED_MINUTES_IN_OVEN - minutos)

}

// let minutos = 39
// remainingMinutesInOven(minutos) //xq se copia de vuelta


function preparationTimeInMinutes(cant_capas)
{
    return(cant_capas * 2);

}

// let cant_capas = 8
// preparationTimeInMinutes(cant_capas)


function totalTimeInMinutes(cant_capas,minutos)
{
    return(minutos + cant_capas * 2)

}
module.exports = {EXPECTED_MINUTES_IN_OVEN,remainingMinutesInOven,preparationTimeInMinutes,totalTimeInMinutes}

// totalTimeInMinutes(cant_capas,minutos)
    
// let minuto = parseInt(39)
// let capas = parseInt(8)
// let cantidaddetiempoporcapas = parseInt(capas * 2)
// let cantidaddetiempoenelhorno = parseInt(40)
// console.log(`Cantidad de tiempo faltante: ${cantidaddetiempoenelhorno - minuto}`)
// console.log(`Tiempo de horenado de las capas: ${cantidaddetiempoporcapas}`)
// console.log(`Total de tiempo en el horno: ${minuto + cantidaddetiempoporcapas}`)

