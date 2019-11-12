const express = require("express");
const app = express();
const hbs = require("hbs");
require('./hbs/helpers');

const port = process.env.PORT || 3000;

/* creando en middleware:
recibe la función express y se le especifica cual es el contenido statico que se quiere servir
o que sea publico: */
app.use(express.static(__dirname + "/public"));

/* se especifica el directorio donde se registran los  */
hbs.registerPartials(__dirname + "/views/partials");
// EXPRESS HBS enginepartials
app.set("view engine", "hbs");


app.get("/", (req, res) => {
  /* al utilizar un template engine hbs,
    se puede renderizar
    se renderiza el archivo home.hbs  */

  /* para renderizar variables que se encuentre de manera dinamica, se le
  mandan como argumento:  */
  res.render("home", {
    nombre: "freyder otalvaro"
    // anio: new Date().getFullYear() /* poniendo el año de manera dinamica */
  });
});

/* path o servicio para la pagina about: */
app.get("/about", (req, res) => {
  res.render("about");
});

/* app.listen, recibe también un callback */
app.listen(port, () => {
  console.log(`Escuchando peticiones en el puerto ${port}`);
});
