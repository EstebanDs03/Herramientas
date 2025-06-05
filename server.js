// Importa el módulo http de Node.js
const http = require("http");

// Crea un servidor HTTP
const server = http.createServer((req, res) => {
    // Establece el código de estado y el tipo de contenido de la respuesta
    res.writeHead(
        200,
        { "content-type": "text/plain" },
        // Envía la respuesta al cliente
        res.end("Hello World!\n")
    );
});

// El servidor escucha en el puerto 3000 en localhost
server.listen(3000, "localhost", () => {
    // Muestra un mensaje en consola cuando el servidor está en ejecución
    console.log("Servidor en ejecucion ....... :)");
});
