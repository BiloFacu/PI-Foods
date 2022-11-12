const { Recipes } = require('../db.js')
const URL = 'https://api.spoonacular.com/recipes/complexSearch'
const URLID= 'https://api.spoonacular.com/recipes/'
const { API_KEY } = process.env
const  axios  = require ('axios')    
const condition = {}
const where = {}

const getRecipes = async (req, res) => {
    const { name } = req.query
    if(!name) return res.status(404).send('Algo ha ocurrido mal')
    const apiData = await axios.get(`${URL}?apiKey=${API_KEY}`)
    const recipe = await apiData.data.results
    const filterName = recipe.filter(e => e.title.includes(name))  
    if(name) where.name = name
    if(where) condition.where = where; 
    const bdData = await Recipes.findAll(condition)
    bdData.map(e => filterName.push(e)) 
    if(filterName.length === 0) return res.status(404).send('Algo ha ocurrido mal')
    res.status(201).json(filterName)
}

const postRecipes = async (req, res) =>{
const recipes = await Recipes.create(req.body); 
try {
    res.status(201).json(recipes)
} catch (error) {
    res.status(404).send(error)
}
}

const getIdRecipes = async (req, res) => {
    const { id } = req.params
    const apiData = await axios.get(`${URLID}${id}/information?apiKey=${API_KEY}`)
    const recipe = await apiData.data
    const recipeInfo = {
        imagen: recipe.image,
        title: recipe.title,
        diets: recipe.diets.map(e => e),
        dishTypes: recipe.dishTypes.map(e => e),
        summary: recipe.summary,
        healthScore: recipe.healthScore,
        steps: recipe.analyzedInstructions.map(e => e)
    }
    try {
        res.status(201).json(recipeInfo)
    } catch (error) {
        res.status(404).send(error)
    }
/*  [ ] Los campos mostrados en la ruta principal para cada receta (imagen, nombre, tipo de plato y tipo de dieta)
    [ ] Resumen del plato
    [ ] Nivel de "comida saludable" (health score)
    [ ] Paso a paso */
}
module.exports = {getRecipes, postRecipes, getIdRecipes}
