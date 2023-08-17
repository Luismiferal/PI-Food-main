import React from "react";
import { Link } from 'react-router-dom';

export default function Nav(){


    return(
        <div className="Nav_Container">
            <h1 className="Nav_Title">PROYECTO INDIVIDUAL DE SOY HENRY</h1>
            <Link to='/home'>
                <button class="button-Nav" role="button">Home</button>
            </Link>
        </div>
    )
}