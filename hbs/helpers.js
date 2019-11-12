const hbs = require("hbs");

//helpers
hbs.registerHelper("getAnio", () => {
    return new Date().getFullYear();
  });
  /* este helper capitaliza las palabras que se reciba:
  capitalizar es escribir una palabra con su primera letra en mayúscula 
  y el resto de las letras en minúsculas */
  hbs.registerHelper('capitalizar', (texto) => {
    let palabras = texto.split(' ');/* para dividir por un espacio vacio */
    palabras.forEach((palabra, idx) => {
      palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });
    return palabras.join(' ');
  });
  