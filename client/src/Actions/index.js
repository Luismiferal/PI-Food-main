import axios from 'axios';
import validator from 'validator'

export function getRecipe(){
    return async function(dispatch){
        var json = await axios.get('http://localhost:3001/recipes');

        return dispatch({
            type: 'GET_RECIPES',
            payload: json.data
        })
    }
};

export function postRecipe(payload){
    return async function(){
        const postAxios = await axios.post('http://localhost:3001/recipes',payload)
        return postAxios
    }
}
export function detailCard(payload){
    return async function(dispatch){
        if(!isNaN(payload)){
            
        var json = await axios.get(`http://localhost:3001/recipes/${payload}`);

        return dispatch({
            type: 'DETAIL_CARD',
            payload: json.data
        })
        }else if(validator.isUUID(payload) === true){

            
        var jsonV = await axios.get(`http://localhost:3001/recipes/${payload}`);

        return dispatch({
            type: 'DETAIL_CARD',
            payload: jsonV.data
        })
        }else{
        var jsonW = await axios.get(`http://localhost:3001/recipes/name?name=${payload}`);

        return dispatch({
            type: 'DETAIL_CARD',
            payload: jsonW.data[0]})
        }
        }
        
    }


export function getDiets(){
    return async function(dispatch){
        var json = await axios.get('http://localhost:3001/diets');
        return dispatch({
            type: 'GET_DIETS',
            payload: json.data
        })
    }
}


export function cleanRecipe(payload){
    return{
        type: 'CLEAN_RECIPE',
        payload
    }
}

export function filterRecipesByDiets(payload){
    return{
        type:'FILTER_BY_DIET',
        payload: payload
    }
};

export function ordenByName(payload){
    console.log('entre a la action')
    return{
        type: 'ORDEN_BY_NAME',
        payload: payload,
    }
};

export function ordenByScore(payload){
    return{
        type: 'ORDEN_BY_SCORE',
        payload: payload,
    }
};

export function cleanDetail(payload){
    return{
        type: 'CLEAN_DETAIL',
        payload: payload,
    }
}


export function searchBar(payload){
    return{
        type: 'SEARCH_BAR',
        payload: payload,
    }
};


export function deleteDb(payload){
    return async function(dispatch){
        const deleteAxios = await axios.delete(`http://localhost:3001/recipes/${payload}`)
        return {
            type:'DELETE_RECIPE',
            payload: payload
        }
    }
}

export function addFavorite(payload){
    return{
        type:'ADD_FAVORITE',
        payload: payload,
    }
}
//acomodar acá algunas funciones no activas(prescindibles)