const AutorController = require("../controllers/autores.controller");

module.exports = app => {
  app.get("/api/autors", AutorController.findAllAutors);
  app.get("/api/autors/:id", AutorController.findOneSingleAutor);
  app.put("/api/autors/update/:id", AutorController.updateExistingAutor);
  app.post("/api/autors/new", AutorController.createNewAutor);
  app.delete("/api/autors/delete/:id", AutorController.deleteAnExistingAutor);
};