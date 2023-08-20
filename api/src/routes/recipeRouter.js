const { Router } = require('express');
const { postRecipe, getApi, getById, getByIdDb }= require('../controllers/recipes.js')

const recipeRouter = Router();

recipeRouter.post('/', postRecipe)
recipeRouter.get('/:id', async (req, res) =>{
    const { id } = req.params
    if(!isNaN(id)){
        const info = await getById(id);
        res.status(200).send(info)
    }else{
        const Db = await getByIdDb(id);
        res.status(200).send(Db)
    }
})

recipeRouter.get('/',async  (req, res)=>{
    const {name} = req.query
        try{
            
                const info = await getApi();
                res.status(200).send(info)
                
            }
           
        catch(error){
            res.status(404).send(error)
        }
    
    })


module.exports = recipeRouter;







