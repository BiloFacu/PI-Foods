import React from "react";
import { Link } from "react-router-dom";
import './Landing.css'

const LandingPage = () => {
    return (
        <div className="Landing">
            <Link to="/home">
                <button> Iniciar </button>
            </Link>
        </div>
    )
}

export default LandingPage;