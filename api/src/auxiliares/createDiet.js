const { Diet } = require('../db.js')

const llenarTiposDiets = async ()=>{
    try {
        const listaDeDietas =["Vegetarian","Lacto-Vegetarian","Ovo-Vegetarian","Vegan","Pescetarian","Paleo","Primal","Low FODMAP","Whole30","Gluten Free","Ketogenic"]
        
        listaDeDietas.forEach( async diet=>{
            await Diet.create({
                name: diet,

            });
        })

        
    } catch (error) {
        throw new Error(error.message)
    }
}


module.exports = llenarTiposDiets;