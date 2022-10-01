// const prompt = require('prompt-sync')();
// const name = prompt('What is your name?');
// console.log(`Hey there ${name}`);

//Condicionales
//IF

function comparar(a)
{
    if (a > 0){
        console.log("Positivo")
    }
    else if(a == 0)
    {
        console.log("Cero")
    }
    else if(a < 0)
    {
        console.log("Negativo")
    }
    else{
        console.log("Numero invalido")
    }
}

function comparar2(a)
{
   switch(a)
   {
        case 0: {
            console.log("Cero") 
        break;
        }
        case 10: {
            console.log("Diez") 
            break;
        }
        case -10: {
            console.log("Menos diez") 
            break;
        }
        default: console.log("Numero no encontrado") 
    }
}


let a=-10
comparar2(a)