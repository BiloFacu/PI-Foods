const { Router } = require('express');
// Importar todos los routers;
const { diets } = require('../db')
//const authRouter = require('./auth.js');
const { getDiets } = require('../controllers/controller.js')


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/', getDiets)

module.exports = router;
