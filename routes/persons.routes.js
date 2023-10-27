const { Router } = require('express');

const {agregarPersona,editarPersona,eliminarPersona,mostrarPersona,mostrarPersonas} = require('../controllers/persons.controller')

const routerPersons = Router();

routerPersons.get('/', mostrarPersonas);
routerPersons.get('/:id', mostrarPersona);
routerPersons.post('/', agregarPersona);
routerPersons.put('/:id',editarPersona);
routerPersons.delete('/:id',eliminarPersona);

module.exports = routerPersons;