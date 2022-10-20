
//Tomar una lista de palabra y mostrar un frase aleatoria.

const frases = [" Hola ", " como " , " andas ", " que ", " lindo ",  
                " dia ", " no ",  " tan ",  " feo " ," como ", " ayer "  ]

                
let contador=0
let resultado

for(let i=0 ;i < frases.length; i++)
{
    resultado += frases[Math.floor(Math.random() * (frases.length+1))]

}

console.log(resultado)