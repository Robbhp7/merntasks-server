//Routes para autenticar usuario
const express = require('express');
const router = express.Router();
const {check} = require('express-validator');
const auth = require('../middleware/auth');
const authController = require('../controllers/authController');

//Iniciar sesión
// api/auth
router.post('/', 
    /*[
        check('email', 'Agrega un Email válido.').isEmail(),
        check('password', 'El Password debe tener mínimo 6 caracteres.').isLength({min: 6})
    ],*/
    authController.autenticarUsuario
);


//Obtiene usuario autenticado
router.get('/',
    auth,
    authController.usuarioAutenticado
);
module.exports = router;