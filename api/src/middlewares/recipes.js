const { Router } = require('express');
const { getRecipes, postRecipes, getIdRecipes } = require('../controllers/recipes.controller.js')


const router = Router();

router.get('/', getRecipes);
router.post('/', postRecipes)
router.get ('/:id', getIdRecipes)

module.exports = router;