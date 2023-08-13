import React from "react";


import { Link } from 'react-router-dom';

export default function Nav(){


    return(
        <div className="Nav_Container">
            <h1 className="Nav_Title">PI-Food Henry</h1>
            <Link to='/home'>
                <button class="button-Nav">Home</button>
            </Link>
        </div>
    )
}