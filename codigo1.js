let n = 1234;

// 1️⃣ Convertimos el número a texto
let texto = n.toString();  // "1234"

// 2️⃣ Separamos cada carácter en un arreglo
let arreglo = texto.split("");  // ["1", "2", "3", "4"]

// 3️⃣ Invertimos el orden del arreglo
let invertido = arreglo.reverse();  // ["4", "3", "2", "1"]

// 4️⃣ Unimos el arreglo de nuevo en una cadena
let resultado = invertido.join(""); // "4321"

// 5️⃣ (Opcional) Convertimos de nuevo a número
let numeroInvertido = parseInt(resultado);

console.log(numeroInvertido); // → 4321

// 1) Hola mundo
console.log("¡Hola, mundo!");
