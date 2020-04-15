//Routes para crear usuarios
const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');
const {check} = require('express-validator');

//Crea un usuario
// api/usuarios
router.post('/', 
    [
        check('nombre', 'El Nombre es obligatorio.').not().isEmpty(),
        check('email', 'Agrega un Email válido.').isEmail(),
        check('password', 'El Password debe tener mínimo 6 caracteres.').isLength({min: 6})
    ],
    usuarioController.crearUsuario
);
module.exports = router;