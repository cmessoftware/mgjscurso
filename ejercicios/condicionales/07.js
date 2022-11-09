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

//DNI = Es un numero? - No - Dni invalido
                    

function letradni(dni)
{
    if (isNaN(dni))
    {
        console.log("DNI Invalido")
    }
    else if(dni <= 0)
    {
        console.log("Numero de DNI fuera de rango")
    }
    else if(dni >= 99999999)
    {
        console.log("Numero de DNI fuera de rango")
    }
    else if(dni / 23)
    {
        console.log(dni%23)
    }

}
let dni = 30886964
letradni(dni)