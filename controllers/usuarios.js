const { request, response } = require("express");

const usuariosGet = (req = request, res = response) => {
  res.json({
    msg: "GET usuarios",
  });
};

const usuariosPost = (req, res) => {
  const { nombre, edad } = req.body;

  res.json({
    msg: "POST usuarios",
    nombre,
    edad,
  });
};

const usuariosPut = (req, res) => {
  res.json({
    msg: "PUT usuarios",
  });
};

const usuariosDelete = (req, res) => {
  res.json({
    msg: "DELETE usuarios",
  });
};

module.exports = {
  usuariosGet,
  usuariosPost,
  usuariosPut,
  usuariosDelete,
};
