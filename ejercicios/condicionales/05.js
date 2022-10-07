// Realizar una funcion que calcule el valor de la letra de un número de DNI 
//(Documento nacional de indentidad).
//El algoritmo para calcular la letra del dni es el siguiente :

// El número debe ser entre 0 y 99999999
// Debemos calcular el resto de la división entera entre el número y el número 23.
// Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  
//(T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E)
// Si el DNI introducido no es un número deberá mostrar "DNI Invalido" y salir
// Si el DNI introducido esta fueron de rango definido mostrar "Numero de DNI fuera de rango" 
//Para saber si lo ingresado es un numero usar la funcion isNaN() (IS NOT a NUMBER)
//Nota: Los textos de los mensajes poner TEXTUALES.

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingrese DNI: ', function (dni) {
    letraDeDNI(dni)
    rl.close();
  });

rl.on('close', function () {
  console.log('\nBYE BYE !!!');
  process.exit(0);
});


function letraDeDNI(dni)
{ 
    console.log(dni)

    dni = 23470455

}


module.exports = letraDeDNI