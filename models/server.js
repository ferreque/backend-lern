const express = require("express");
const cors = require("cors");
//importar conexión a DB
const { dbConnection } = require("../database/config");

class Server {
  constructor() {
    //iniciliza cuando se levanta el server
    this.app = express();
    this.usuariosPath = "/api/usuarios";
    //conexion DB
    this.conectarDB();
    //middlewares
    this.middlewares();
    //rutas
    this.routes();
  }

  //funcion conectar DB
  async conectarDB() {
    await dbConnection();
  }

  middlewares() {
    //-->funciones para entrar a req y res

    //carpeta publica
    this.app.use(express.static("public"));

    //CORS
    this.app.use(cors());

    //Acceso al body y parsear
    this.app.use(express.json());
  }

  routes() {
    this.app.use(this.usuariosPath, require("../routes/usuarios"));
  }

  listen() {
    this.app.listen(process.env.PORT, () => {
      console.log("Servidor online en puerto", process.env.PORT);
    });
  }
}
module.exports = Server;
