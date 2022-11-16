import React from "react";
import { Link } from "react-router-dom"


const RecipesCards = ( props ) => {
    return (
        <div className="cards">
            <div className={"cards "+ props.id}>
                <Link exact to={`/recipes/${props.id}`}>
                    <div className="header">
                        <h3>{props.title}</h3>
                    </div>
                    <img src={props.image} alt={props.title} />
                    <p>{props.diets}</p>
                </Link>
            </div>
        </div>
    )
}

export default RecipesCards;
