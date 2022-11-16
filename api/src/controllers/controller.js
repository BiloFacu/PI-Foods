const { Recipes, Diets } = require('../db.js')
const URL = 'https://api.spoonacular.com/recipes/complexSearch'
const URLID= 'https://api.spoonacular.com/recipes/'
const { API_KEY } = process.env
const  axios  = require ('axios')    
const condition = {}
const where = {}

const getRecipes = async (req, res, next) => {
    try {
        const { name } = req.query
        /* const apiData = await axios.get(`${URL}?apiKey=${API_KEY}&addRecipeInformation=true&number=100`)
        const recipe = await apiData.data.results
        const filterName = recipe.filter(e => e.title.includes(name)) */
        if(name) where.name = name
        if(where) condition.where = where; 
        const bdData = await Recipes.findAll(condition)
        /* bdData.map(e => filterName.push(e)) 
        if(filterName.length === 0) return res.status(404).send('No se encontro ninguna receta con ese nombre') */
        res.status(201).json(bdData)
    } catch (error) {
        next(error);
    }
}

const postRecipes = async (req, res, next) =>{
const recipes = await Recipes.create(req.body);
console.log(recipes) 
try {
    res.status(201).json(recipes)
} catch (error) {
    next(error)
}
}

const getIdRecipes = async (req, res, next) => {
    const { id } = req.params
    let recipe = undefined
    if(id.includes('-')){
        const bdData = await Recipes.findByPk(id)
        recipe = bdData 
    } else {
        const apiData = await axios.get(`${URLID}${id}/information?apiKey=${API_KEY}`)  
        recipe = await apiData.data
    }
    try {
        const recipeInfo = {
            imagen: recipe.image,
            title: recipe.title,
            diets: recipe.diets&& recipe.diets.map(e => e),
            dishTypes: recipe.dishTypes&& recipe.dishTypes.map(e => e),
            vegetarian: recipe.vegetarian,
            vegan: recipe.vegan,
            glutenFree:recipe.glutenFree,
            summary: recipe.summary,
            healthScore: recipe.healthScore,
            steps: recipe.steps || recipe.analyzedInstructions&& recipe.analyzedInstructions[0].steps[0].step
        }
            res.status(201).json(recipeInfo)
    } catch (error) {
        res.status(404)
        next(error)
    }
}

const getDiets = async (req, res, next) => {
    try {
        const allDiets = await Diets.findAll(condition)
        console.log(allDiets)
        res.status(201).json(allDiets)
    } catch (error) {
        next(error)
    } 
}
module.exports = { getRecipes, postRecipes, getIdRecipes, getDiets }
