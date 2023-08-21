//bucle for en JavaScript para sumar los números de un array:
const numeros = [5, 10, 15, 20, 25];
let sumaTotal = 0;

for (let i = 0; i < numeros.length; i++) {
  sumaTotal += numeros[i];
}

console.log(`La suma total de los números en el array es: ${sumaTotal}`);
