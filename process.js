// Imprime el ID del proceso actual
console.log("Id del proceso:", process.pid);

// Imprime la versión de Node.js en uso
console.log("Versión de Node.js:", process.version);

// Imprime la plataforma del sistema operativo
console.log("Plataforma:", process.platform);

// Imprime el directorio de trabajo actual
console.log("Directorio de trabajo actual:", process.cwd());

// Imprime la arquitectura del sistema
console.log("arquitectura del sistema:", process.arch);

// Imprime el tiempo de actividad del proceso en segundos
console.log("tiempo de actividad del sistema:", process.uptime(), "segundos");

// Imprime todas las variables de entorno
console.log(process.env);

// Imprime algunas variables de entorno específicas
console.log("Variables de entorno:");
console.log("PATH:", process.env.PATH);
console.log("User Profile:", process.env.home || process.env.USERPROFILE);
console.log("Directorio temporal:", process.env.TEMP || process.env.TMP);
console.log("NODE_ENV:", process.env.NODE_ENV || "desconocido");

// Obtiene el uso de memoria del proceso
const memeoryUsage = process.memoryUsage();

// Imprime el uso de memoria en bytes
console.log("Uso de memoria:");
console.table(memeoryUsage);

// Convierte el uso de memoria de bytes a megabytes
const memeoryUsageCoverted = {
  rss: memeoryUsage.rss / (1024 * 1024),
  heapTotal: memeoryUsage.heapTotal / (1024 * 1024),
  heapUsed: memeoryUsage.heapUsed / (1024 * 1024),
  external: memeoryUsage.external / (1024 * 1024),
  arrayBuffers: memeoryUsage.arrayBuffers / (1024 * 1024),
};

// Imprime el uso de memoria convertido a MB
console.log("Uso de memoria convertido a MB:");
console.table(memeoryUsageCoverted);

// Maneja eventos del proceso para salida y señales de interrupción
process.on("exit", (code) => {
  console.log(`El proceso está a punto de salir con el código: ${code}`);
  console.log("Limpieza finalizada. Adiós!");
});
process.on("sigInt", () => {
  console.log("Se ha recibido una señal de interrupción (Ctrl + c).");
  process.exit(0);
});

console.log("El proceso está en ejecución. Presiona Ctrl + C para salir.");
// Escucha la entrada estándar (stdin) para comandos del usuario
process.stdin.on("data", (data) => {
  // Convierte la entrada a string y elimina espacios
  const input = data.toString().trim();
  // Si el usuario escribe 'salir', termina el proceso
  if (input.toLowerCase() === "salir") {
    console.log("Saliendo del proceso...");
    process.exit(0);
  } else {
    // Si el comando no es reconocido, muestra un mensaje de ayuda
    console.log(`Comando no reconocido: ${input}`);
    console.log("Escribe 'salir' para terminar el proceso.");
  }
});
