const { Router } = require('express');

const {agregarUsuario,editarUsuario,eliminarUsuario,mostrarUsuario,mostrarUsuarios} = require('../controllers/users.controller')

const routerUsers = Router();

routerUsers.get('/', mostrarUsuarios);
routerUsers.get('/:id', mostrarUsuario);
routerUsers.post('/', agregarUsuario);
routerUsers.put('/:id',editarUsuario);
routerUsers.delete('/:id',eliminarUsuario);

module.exports = routerUsers;