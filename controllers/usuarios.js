const { request, response } = require("express");
const Usuarios = require("../models/usuario");
const bcrypt = require("bcryptjs");

const usuariosGet = (req = request, res = response) => {
  res.json({
    msg: "GET usuarios",
  });
};

const usuariosPost = async (req = require, res = response) => {
  const { nombre, email, password, rol } = req.body;

  const usuario = new Usuarios({ nombre, email, password, rol });

  //encriptacion
  const salt = bcrypt.genSaltSync();
  usuario.password = bcrypt.hashSync(password, salt);

  await usuario.save();

  res.json({
    msg: "Usuario creado",
    usuario,
  });
};

const usuariosPut = async (req = require, res = response) => {
  const id = req.params.id;
  const { _id, email, rol, password, ...resto } = req.body;

  if (password) {
    const salt = bcrypt.genSaltSync();

    resto.password = bcrypt.hashSync(password, salt);
  }
  const usuario = await Usuarios.findByIdAndUpdate(id, resto, { new: true });

  res.json({
    msg: "PUT usuarios",
    usuario,
  });
};

const usuariosDelete = async (req = require, res = response) => {
  const id = req.params.id;

  const usuario = await Usuarios.findByIdAndUpdate(id, { estado: false });

  res.json({
    msg: "DELETE usuarios",
    usuario,
  });
};

module.exports = {
  usuariosGet,
  usuariosPost,
  usuariosPut,
  usuariosDelete,
};
