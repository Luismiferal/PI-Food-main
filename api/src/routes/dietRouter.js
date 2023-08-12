const express = require('express');
const { Diet } = require('../db.js');


const dietRouter = express.Router();
dietRouter.get('/',async (req, res)=>{
    try{
        const diets= await Diet.findAll();
        res.status(200).json(diets);
    }catch(error){
        res.status(404).send(error)
    }
    
})

module.exports = dietRouter;