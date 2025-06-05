// Importamos el módulo 'crypto' de Node.js, que nos permite trabajar con funciones criptográficas
const crypto = require("crypto");

// Definimos el texto que queremos cifrar (en este caso, solo vamos a calcular su hash)
const text = "texto cifrado";

// Creamos un hash SHA-256 a partir del texto. El hash es una huella digital única del contenido.
// Primero indicamos el algoritmo ('sha256'), luego actualizamos el hash con el texto y finalmente lo convertimos a formato hexadecimal.
const hash = crypto.createHash("sha256").update(text).digest("hex");

// Mostramos el texto original en consola
console.log(`Texto original: ${text}`);
// Mostramos el resultado del hash SHA-256 en consola
console.log(`Hash SHA-256: ${hash}`);