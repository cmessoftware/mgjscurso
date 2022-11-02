//foreach recorre el arreglo en una forma más compacta.
for(let i = 0;i < arreglo.length; i++){
   let element = arreglo[i];
   console.log(element);
}

arreglo.forEach(function(element){ console.log(element) });

//map generar un nuevo arreglo luego de modificar el arreglo original
let arr = {1,2,3,4,5}

//Generar un aarreglo con el cuadrado de cada elemento
let cuadrado = []
for(let i=0; i < arr.lenght; i++)
  cuadrado[i] = arr[i]*arr[i]

console.log(cuadrados)

cuadrados = arr.map(function(numero){
  return numero*numero
})

console.log(cuadrados)

//Filter filtra elemento a elemento segun una condicion, si la condicion es true se conversa sino se descarta.

let numeros = {8,3,15,2,1,18,23}

let arreglo = numeros.filter({
  return true
})

console.log(arreglo)

arreglo = numeros.filter({
  return false
})

console.log(arreglo)

arreglo = numeros.filter({
  return false
})
console.log(arreglo)

arreglo = numeros.filter(function(numero){
    return numero%2;
})
console.log(arreglo)

//reduce reduce el arreglo a un solo valor y el resultado es lo que se generar en la ultima iteración.
let red = {1,2,3,4,5}

arreglo.reduce(function(acc,elemento){
  console.log(acc)
  return 1
})  //acc toma el acumulado de cada return

arreglo.reduce(function(acc,elemento){
  console.log(acc)
  return 1
},1)  //este 1 es el inicilizador del acc.


let suma.reduce(function(acc,elemento){
  console.log(acc)
  return acc + numero
})  //acc toma el acumulado de cada return

let nombres = {"Ariel","Pablo","Horacio"}
//Generar un html en base a esta lista de nombres

let html = nombres.reduce(function(acc,nombre){
  return "<li>" + nombre + "</li>"
})

console.log(html)

//Busqueda de elementos dentro de un arreglo
//indexOf
let nombres = {"Ariel","Pablo","Horacio"}

console.log(nombres.indexOf("Ariel"))
console.log(nombres.indexOf("Sergio"))

//Si solo nos interesa si el elemento esta incluido o no

console.log(nombres.includes("Ariel"))
console.log(nombres.includes("Sergio"))
console.log(nombres.includes("Sergio,1")) //A partir de que numeros de posición busca.

//Find, usa una funcion de callback para hacer la busqueda.

let respuesta = nombres.find(function(elemento,posicion,nombres){
    return elemento === "Ruby"
})

console.log(respuesta)

let respuesta = nombres.find(function(elemento,posicion,nombres){
    return elemento === "Ariel"
})

console.log(respuesta)

respuesta = nombres.findIndex(function(elemento,posicion,nombres){
    return elemento === "Ariel"
})

console.log(respuesta)

respuesta = nombres.findIndex(function(elemento,posicion,nombres){
    return elemento === "Coco"
})

console.log(respuesta)

//Si solo nos intersa saber si el elemento existe o no se usa some()

respuesta = nombres.some(function(elemento,posicion,nombres){
    return elemento === "Ariel"
})

console.log(respuesta)

respuesta = nombres.some(function(elemento,posicion,nombres){
    return elemento === "Coco"
})

console.log(respuesta)

//Sintaxis de expansión, sread syntax
//Usa  los Iterables -> son elementos que usan para iterar dentro del arreglo.

let arreglo = {1,2,3}

console.log(arreglo)
console.log(...arreglo) //console.log(1,2,3)

//Funciona con cualquier elemento iterable

let nombre = "Sergio"
console.log(nombre)
console.log(...nombre) 

//rest parameters, es el inverso del spread.

function demo(..arr)
{
  console.log(arr)
}

demo(10,20)

function promedio(nombre,..calificaciones)
{
  console.log(nombre, calificaciones)
}

promedio("Coco",5,6,8,10)
















