



export function getAllVideogames(){

    return dispatch => fetch("http://localhost:3001/videogames")      //solicita los video juegos
    .then(res => res.jsom())                                          //luego, la respuesta la pasamos a json
    .then((payload)=>                                                 //ahora, vemos el state actual
    dispatch({type: "GET_ALL_RECIPES",payload}                          //si sale algo mal, nos avise con un warning  
    ).catch(error => console.warn(error)))          

}