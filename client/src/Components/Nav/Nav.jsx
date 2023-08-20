import React from "react";
import { Link } from 'react-router-dom';
import './Nav.scss';

export default function Nav(){


    return(
        <div className="Nav_Container">
            <h1 className="Nav_Title">PROYECTO INDIVIDUAL FOOD DE SOY HENRY</h1>
            <Link to='/CreateRecipe'>
                <button class="button-Nav" >Create Recipe</button>
            </Link>
        </div>
 
 )
}


// role="button"