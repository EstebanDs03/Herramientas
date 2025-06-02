// Importa los módulos necesarios
const fs = require("fs");
const path = require("path");
const FormData = require("form-data");

// Importación dinámica de fetch para compatibilidad con Node.js < 18
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

// Función para transcribir un archivo de audio usando la API de OpenAI
async function transcribeAudio(audioFilePath, apiKey) {
  try {
    // Verifica si el archivo existe
    if (!fs.existsSync(audioFilePath)) {
      throw new Error("El archivo no existe");
    }

    // Lee el archivo de audio
    const audioFile = fs.readFileSync(audioFilePath);

    // Crea un objeto FormData y agrega el archivo de audio y el modelo a usar
    const formData = new FormData();
    formData.append("file", audioFile, path.basename(audioFilePath));
    formData.append("model", "whisper-1");

    // Realiza la petición a la API de OpenAI para transcribir el audio
    const response = await fetch(
      "https://api.openai.com/v1/audio/transcriptions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          ...formData.getHeaders(), // Importante para multipart/form-data
        },
        body: formData,
      }
    );

    // Si la respuesta no es exitosa, lanza un error con el mensaje de la API
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Error en la API: ${JSON.stringify(errorData)}`);
    }

    // Parsea la respuesta y obtiene la transcripción
    const data = await response.json();
    const transcriptions = data.text;

    // Construye la ruta para guardar la transcripción como archivo de texto
    const outputFilePath = path.join(
      path.dirname(audioFilePath),
      `${path.basename(audioFilePath, path.extname(audioFilePath))}_transcription.txt`
    );

    // Escribe la transcripción en un archivo de texto
    fs.writeFileSync(outputFilePath, transcriptions, "utf8");
    console.log(`Transcripción guardada en: ${outputFilePath}`);

    // Retorna la transcripción
    return transcriptions;
  } catch (error) {
    // Maneja y muestra cualquier error ocurrido durante el proceso
    console.error("Error al transcribir el audio:", error.message);
    throw error;
  }
}

// Ruta del archivo de audio a transcribir
const audioPath =
  "./Audios/GEEZYDEE  KRIS R - PARCHE TRANQUI  (VIDEO OFICIAL).mp3";

// Tu API Key de OpenAI (NO la compartas públicamente)
const { openaiApiKey } = require("./config");

// Llama a la función y maneja la respuesta
transcribeAudio(audioPath, openaiApiKey)
  .then((transcription) => {
    console.log("Transcripción exitosa:", transcription);
  })
  .catch((error) => {
    console.error("Error en la transcripción:", error.message);
  });