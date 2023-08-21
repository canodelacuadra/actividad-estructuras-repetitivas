//Problema: Contar monedas de 20 céntimos hasta que alcances un total de al menos 5€ usando un bucle while.
let totalDinero = 0;
let contadorMonedas = 0;
const valorMoneda = 0.20; // Supongamos que cada moneda es de 20 céntimos

while (totalDinero < 5) {
  totalDinero += valorMoneda;
  contadorMonedas++;
}

console.log(`Total de monedas: ${contadorMonedas}`);