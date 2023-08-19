const { Diet } = require('../db.js')

const llenarTiposDiets = async ()=>{
    try {
        const listaDeDietas =[
            'gluten free',
            'lacto ovo vegetarian',
            'paleolithic',
            'dairy free',
            'vegan',
            'primal',
            'whole 30',
            'pescatarian']
        
        listaDeDietas.forEach( async diets=>{
            await Diet.create({
                name: diets,

            });
        })

        
    } catch (error) {
        throw new Error(error.message)
    }
}


module.exports = llenarTiposDiets;