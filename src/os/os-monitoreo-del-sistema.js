// Importamos el módulo 'os' de Node.js, que nos permite obtener información del sistema operativo
const os = require("os");

// Definimos una función para mostrar información relevante del sistema
function showSystemInfo() {
  console.log("Información del sistema:");
  // Mostramos el tipo de sistema operativo (por ejemplo, Windows_NT, Linux, Darwin)
  console.log(`Sistema operativo: ${os.type()}`);
  // Mostramos la plataforma sobre la que corre Node.js (por ejemplo, win32, linux)
  console.log(`Plataforma: ${os.platform()}`);
  // Mostramos la arquitectura de la CPU (por ejemplo, x64, arm)
  console.log(`Arquitectura: ${os.arch()}`);
  // Mostramos la versión específica del sistema operativo
  console.log(`Versión del SO: ${os.release()}`);
  // Mostramos la memoria total del sistema en megabytes
  console.log(`Memoria total: ${os.totalmem() / (1024 * 1024)} MB`);
  // Mostramos la memoria libre disponible en megabytes
  console.log(`Memoria libre: ${os.freemem() / (1024 * 1024)} MB`);
  // Mostramos la cantidad de núcleos de CPU disponibles
  console.log(`CPU: ${os.cpus().length} núcleos`);
  // Mostramos el nombre del host de la máquina
  console.log(`Hostname: ${os.hostname()}`);
  // Mostramos el tiempo que lleva encendido el sistema, en segundos
  console.log(`Tiempo de actividad: ${os.uptime()} segundos`);
  // Mostramos el directorio de inicio del usuario actual
  console.log(`Directorio de inicio: ${os.homedir()}`);
  // Mostramos el directorio temporal del sistema operativo
  console.log(`Directorio temporal: ${os.tmpdir()}`);
}

// Llamamos a la función para que imprima toda la información del sistema en consola
showSystemInfo();