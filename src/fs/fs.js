const fs = require("fs");

const fileName = "ejemplo.text";

// Escribir en un archivo
fs.writeFileSync(
  fileName,
  "Hola, este es un ejemplo de como agregar texto a un archivo de texto",
  "utf8"
);
console.log(`Archivo ${fileName} creado con éxito.`);

// Leer desde un archivo
const conetenido = fs.readFileSync(fileName, "utf8");
// Mostrar el contenido del archivo
console.log(`Contenido del archivo:`, conetenido);

//actualizar el contenido del archivo
fs.appendFileSync(fileName, "\nesta es una nueva linea de texto\n", "utf8");
// Leer nuevamente el contenido del archivo actualizado
const contenidoActualizado = fs.readFileSync(fileName, "utf8");
// Mostrar el contenido actualizado del archivo
console.log(`Contenido actualizado del archivo:`, contenidoActualizado);

// Eliminar el archivo
fs.unlinkSync(fileName);
console.log(`Archivo ${fileName} eliminado con éxito.`);
