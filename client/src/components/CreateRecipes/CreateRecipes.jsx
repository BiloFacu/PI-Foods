import React from "react";
import { useEffect } from "react";
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { createRecipe } from "../../redux/actions";

const CreateRecipe = () => {
    const dispatch = useDispatch()
    const [recipe, setRecipe] = React.useState(
    {
        title: "",
        summary: "",
        healthScore: 0,
        steps: "",
        diets: ""
    })

    function handleInputChange (e) {
        setRecipe({
          ...recipe,
          [e.target.name] : e.target.value
        })
    }
    function handleSubmit(e) {
        e.preventDefault();
        dispatch(createRecipe(recipe))
      }
    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <label>Title: </label>
            <input type="text" name="title" value={recipe.title} onChange={handleInputChange} placeholder="Write a title..."/>
            <label>Summary: </label>
            <input type="text" name="summary" value={recipe.summary} onChange={handleInputChange} placeholder="Write a summary..."/>
            <label>HealthScore: </label>
            <input type="text" name="healthScore" value={recipe.healthScore} onChange={handleInputChange} placeholder="Write a summary health score..."/>
            <label>Steps: </label>
            <input type="text" name="steps" value={recipe.steps} onChange={handleInputChange} placeholder="Write a step by step..."/>
            <button type="submit">Create Movie</button>
        </form>
    )
}

/* [ ] Un formulario controlado con JavaScript con los siguientes campos:
Nombre
Resumen del plato
Nivel de "comida saludable" (health score)
Paso a paso
[ ] Posibilidad de seleccionar/agregar uno o más tipos de dietas
[ ] Botón/Opción para crear una nueva receta */

export default CreateRecipe;