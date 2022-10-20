

const frase = "Hola como andas, que lindo dia, no tan feo como ayer"
let contador=0


for(let i=0; i < frase.length; i++)
{
    if(frase[i]  == 'a')
        contador++
}

console.log(`La cantidas de letras a de la frase son: ${contador} `)