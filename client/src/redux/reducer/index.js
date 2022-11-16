import { GET_ALL_RECIPES ,GET_RECIPE_NAME ,GET_RECIPE_ID ,GET_DIETS ,CREATE_RECIPE } from '../actions/index.js'

const initialState = {
    recipes: [],
    recipesName: [],
    recipeDetail: {},
    diets: []
};

const rootReducer = (state = initialState, action) => {
    switch (action.type){
        case GET_ALL_RECIPES:
            return {
                ...state,
                recipes: action.payload
            }
        case GET_RECIPE_NAME:
            return {
                ...state,
                recipesName: action.payload
            }
        case GET_RECIPE_ID:
            return{
                ...state,
                recipeDetail: action.payload
            }
        case GET_DIETS:
            return{
                ...state,
                diets: action.payload
            }
        case CREATE_RECIPE:
            return{
                ...state,
                recipes: state.recipes.concat(action.payload)
            }
        default:
            return state
    }
}

export default rootReducer;