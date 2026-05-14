
const sumaTotal = (...numeros) => {
  return numeros
    .map(n => parseFloat(n)) // Intenta convertir todo a número (arregla strings)
    .filter(n => !isNaN(n))  // Elimina lo que no se pudo convertir (arregla basura)
    .reduce((acumulado, actual) => acumulado + actual, 0);
};

console.log(sumaTotal(1, 2, 3, 4));          // 10
console.log(sumaTotal(5, "10", null, "abc")); // 15 