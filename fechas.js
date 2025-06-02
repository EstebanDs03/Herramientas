const dateFormatter = require("fechas_esteban_arbelaez");

console.log("Timestamp:", dateFormatter.getTimestamp());
console.log("Fecha en español:", dateFormatter.getLongTime("es"));
console.log("Fecha en inglés:", dateFormatter.getLongTime("en"));
