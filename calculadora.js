function sumaCorregida(a, b) {
  // Convertimos las entradas a números por si acaso llegan como strings (ej: "5")
  const num1 = parseFloat(a);
  const num2 = parseFloat(b);

  // Verificamos si la conversión falló (NaN = Not a Number)
  if (isNaN(num1) || isNaN(num2)) {
    return "Error: Ambos argumentos deben ser números válidos.";
  }

  return num1 + num2;
}