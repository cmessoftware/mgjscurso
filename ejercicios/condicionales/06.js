
function recorrer()
{
  let x = 0

  while(x < 10)
  {
    console.log(x);
    x++;  //x = x + 1
  }

  console.log("---------------------------------");

  let arr = [1,4,6,-1,6,9,0,10,23,12]

  x = 0

  while(x < 10)
  {
    console.log(arr[x]);
    x++;  //x = x + 1
  }
}

function maximo(vectores_numeros)
{
  let max=0
  let x = 0

  while(x < 10)
  {
    
    if(vectores_numeros[x] > max)
      max = vectores_numeros[x]

    x++;  //x = x + 1
  }

  return max
}


function minimo(vectores_numeros)
{
  let min=0
  let x = 0

  while(x < vectores_numeros.length)
  {
    
    if(vectores_numeros[x] < min)
      min = vectores_numeros[x]

    x++;  //x = x + 1
  }

  return min
}


let vectores_numeros = [1,4,6,-1,6,-9,0,10,23,612]

let max = maximo(vectores_numeros)

console.log(`Maximo: ${max}`);

let min = minimo(vectores_numeros)

console.log(`Minimo: ${min}`);