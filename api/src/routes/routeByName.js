const { Router } = require('express');
const {getSearchByName} = require('../controllers/recipeByName.js')



const routerByName = Router();

routerByName.get('/', async  (req, res)=>{
    const {name} = req.query
        try{
            
            const info = await getSearchByName(name);
            
                res.status(200).send(info)

        }catch(error){
            res.status(404).send(error)
        }
    })

    module.exports={routerByName}