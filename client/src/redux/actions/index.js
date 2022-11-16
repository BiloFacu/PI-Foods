import axios from "axios";
export const GET_ALL_RECIPES = "GET_ALL_RECIPES";
export const GET_RECIPE_NAME = "GET_RECIPE_NAME"
export const GET_RECIPE_ID = "GET_RECIPE_ID"
export const GET_DIETS = "GET_DIETS"
export const CREATE_RECIPE = "CREATE_RECIPE"
export const ERROR = "ERROR"


export const getAllRecipes = () =>{
    return async function(dispatch) {
        try {
            const recipes = await axios.get("/recipes?name= ");
            dispatch({ type: GET_ALL_RECIPES, payload: recipes.data})
        } catch (error) {
            dispatch({ type: ERROR, payload: error})
        }
    }
}

export const getRecipeName = (name) => {
    return async function(dispatch) {
        try {
            const recipesName = await axios.get(`/recipes?name=${name}`)
            dispatch({ type:GET_RECIPE_NAME, payload: recipesName.data})
        } catch (error) {
            dispatch({ type: ERROR, payload: error})
        }
    }
}

export const getRecipeId = (id) => {
    return async function (dispatch) {
        try {
            const recipeId = await axios.get(`/recipes/${id}`)
            dispatch({ type:GET_RECIPE_ID, payload: recipeId.data})  
        } catch (error) {
            dispatch({ type: ERROR, payload: error})
        }
        
    }
}

export const getDiets = () => {
    return async function (dispatch) {
        try {
            const diets = await axios.get("/diets");
            dispatch({ type:GET_DIETS, payload: diets.data }) 
        } catch (error) {
            dispatch({ type: ERROR, payload: error})
        }
        
    }
}

export const createRecipe = ( value ) => {
    return async function(dispatch){
        try {
            const recipe = await axios.post('/recipes', value);
            dispatch({type: CREATE_RECIPE, payload: recipe.data})
        } catch (error) {
            dispatch({ type: ERROR, payload: error})
        }
    }
}
