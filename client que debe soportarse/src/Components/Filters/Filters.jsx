import React from "react";
import {useDispatch, useSelector} from 'react-redux';
import SearchBar from "../SearchBar/SearchBar";
import { getRecipe, filterRecipesByDiets, ordenByName, ordenByScore } from "../../Actions";
import './Filters.scss'


export default function Filters(){

    const dispatch = useDispatch();
    const allRecipes = useSelector((state)=> state.recipes);
    // const favorite = useSelector((state) => state.favorites)
    
    function handleFilterDiet(e){
            dispatch(filterRecipesByDiets(e.target.value))

            const filterAlfa = document.getElementById('alfa')
            filterAlfa.selectedIndex = 0

            const filterSalud = document.getElementById('salud')
            filterSalud.selectedIndex = 0
    };
    function handleOrdenByName(e){
            dispatch(ordenByName(e.target.value))
    };
    function handleOrdenByScore(e){
            dispatch(ordenByScore(e.target.value))
    }
    function handleClik(e){
        e.preventDefault();
        dispatch(getRecipe());
        
        const filterDiet = document.getElementById('diet');
        filterDiet.selectedIndex = 0;

        const filterAlfa = document.getElementById('alfa')
        filterAlfa.selectedIndex = 0

        const filterSalud = document.getElementById('salud')
        filterSalud.selectedIndex = 0
    }
    
    return(
        <div className="constiner-filter">
        <div className="container">
            <div>
                <SearchBar/>
            </div>
            <div>
                <h4 className="h4 title-filter">Filters</h4>
                <h5 className="h4 title-fil">Diets</h5>
                <select className='select_constiner select' id="diet" onChange={e=>handleFilterDiet(e)}>
                    <option value='default'>All</option>
                    <option value= 'Vegetarian' >Vegetarian</option>
                    <option value='Lacto Vegetarian2'>Lacto Vegetarian</option>
                    <option value='Ovo Vegetaria3'>Ovo Vegetarian</option>
                    <option value='Vegan'>Vegan</option>
                    <option value='Pescetarian'>Pescetarian</option>
                    <option value='Primal'>Primal</option>
                    <option value='Paleo'>Paleo</option>
                    <option value='Low FODMAP'>Low FODMAP</option>
                    <option value='Whole30'>Whole30</option>
                    <option value='Gluten Free'>Gluten Free</option>
                    <option value='Ketogenic'>Ketogenic</option>

                </select>
                <h4 className="h4 title-filter">Order</h4>
                <h5 className="h4">alphabetically</h5>
                <select className='select_constiner select' id="alfa" onChange={e=>handleOrdenByName(e)}>
                    <option value='default'>Default</option>
                    <option value='asc'>Ascendent</option>
                    <option values='desc'>Descendent</option>
                </select>
                <h5 className="h4">Health Score</h5>
                <select className='select_constiner select' id='salud' onChange={e=>handleOrdenByScore(e)}>
                    <option value='default'>Default</option>
                    <option value='asc'>Ascendent</option>
                    <option value='desc'>Descendent</option>
                </select>
            </div>
        </div>
            <button onClick={e=>handleClik(e)} className='btn_clear'>Refresh</button>
        </div>
    )
};