import React, {useEffect, useState} from "react";
import { getAllRecipes, getRecipeName} from "../../redux/actions";
import { connect, useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import RecipesCards from "../RecipesCards/RecipesCards"

const Home = () => {
    const [title, setTitle] = useState('');
    const dispatch = useDispatch();
   
    useEffect(() => {
        dispatch(getAllRecipes())
    },([]))
    
    function handleSubmit(e){
        e.preventDefault();
        dispatch(getRecipeName(title))
    }


    const fullRecipes = useSelector(store => store.recipes)
    return (
        <div className="home">
            <form onSubmit={(e) => handleSubmit(e)}>
                <label>Titulo</label>
                <input type="text" name="Titulo" value={title} onChange={e => setTitle(e.target.value)} placeholder="Escribe un titulo..."/>
                <button type='submit'>Buscar</button>
            </form>
            <div className="cards"> 
            {fullRecipes&& fullRecipes.map((e) => (
                <div key={e.id}>
                    <RecipesCards
                    id = {e.id}
                    title = {e.title||e.name}
                    image = {e.image}
                    diets = {e.diets}
                    />
                </div>
            ))}
            </div>
        </div>
    )
}

export const mapStateToProps = (state) => { 
    return{
      recipes: state.recipes,
      recipesName: state.recipesName
    }}

export default connect(mapStateToProps, { getAllRecipes, getRecipeName })(Home);