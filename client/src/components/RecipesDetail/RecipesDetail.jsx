import React from "react";
import { useEffect } from "react";
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { getRecipeId } from "../../redux/actions";

const RecipesDetails = () =>{
    const { id } = useParams();
    let dispatch = useDispatch()
    useEffect(() => {
        dispatch(getRecipeId(id))
    }, [dispatch, id])
    const recipeDetail = useSelector((store) => store.recipeDetail)
    return (
        <div className="details">
            <h1>{recipeDetail.name||recipeDetail.title}</h1>
            <img src={recipeDetail.image} alt={recipeDetail.title||recipeDetail.name} ></img>
            <h2>{recipeDetail.dishTypes}</h2>
            <h2>{recipeDetail.diets}</h2>
            <h2>{recipeDetail.summary}</h2>
            <h2>{recipeDetail.steps}</h2>
            <h2>{recipeDetail.healthScore}</h2>
        </div>
    )
}

export default RecipesDetails;