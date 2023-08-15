const { Router } = require('express');
const { postRecipe, getApi, getById, getByName, getByIdDb }= require('../controllers/recipes.js')

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
    const {name} = req.params
        try{
            if(name){

                const info = await getByName(name);
                res.status(200).send(info)

            }else {
                const info = await getApi();
                res.status(200).send(info)
                
            }
           
        }catch(error){
            res.status(404).send(error)
        }
    })

// recipeRouter.delete('/:id', async (req, res) =>{
//     const {id} = req.params

//     const verification = await Recipe.findAll({
//         where:{
//             id: id
//         }
//     });

//     if(!id){
//         return res.status(404).send('no hay id');
//     }else if(!verification.length){
//         return res.status(404).send('Id incorrecto');
//     }
//     else{
//          await Recipe.destroy({
//             where: {
//             id: id
//             }
//             });
//         return res.status(200).send('Se elimino');
//     }
// })

// recipeRouter.put('/:id',async (req, res)=>{
//     const {id} = res.params;
//     const {summary, step, diet, healthScore, name} = req.body; 

//     const allRecipe = await getApi();
//     const aux = allRecipe.find(el => el.id === id);
//     if(aux){
        
//     }else{
//         res.status(404).send('Id no encontrado')
//     }
// })


module.exports = recipeRouter;







