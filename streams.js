// Importamos el módulo 'fs' de Node.js para trabajar con el sistema de archivos
const fs = require("fs");

// Creamos un stream de lectura para leer el archivo 'libro.txt' de la carpeta Libros
// El archivo se lee en formato texto (utf8)
const readableSteam = fs.createReadStream("./Libros/libro.txt", { encoding: "utf8" });

// Creamos un stream de escritura para guardar el contenido leído en 'output_libro.txt'
const writableSteam = fs.createWriteStream("output_libro.txt");

// Cada vez que se recibe un fragmento (chunk) de datos del archivo de entrada,
// lo mostramos por consola y lo escribimos en el archivo de salida
readableSteam.on("data", (chunk) => {
  console.log("Nuevo chunk recibido:");
  console.log(chunk);

  writableSteam.write(chunk);
});

// Cuando termina la lectura del archivo, mostramos un mensaje y cerramos el stream de escritura
readableSteam.on("end", () => {
  console.log("Lectura completa del archivo.");
  writableSteam.end();
});

// Si ocurre un error al leer el archivo, lo mostramos en consola
readableSteam.on("error", (err) => {
  console.error("Error al leer el archivo:", err);
});

// Cuando termina la escritura en el archivo de salida, mostramos un mensaje
writableSteam.on("finish", () => {
  console.log("Escritura completa en el archivo.");
});
