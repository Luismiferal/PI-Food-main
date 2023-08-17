require('dotenv').config();
const { Recipe, Diet} = require('../db.js')
const { Op }= require('sequelize')
const axios = require('axios');
const {getApi} = require('./recipes.js')





const getSearchByName = async (name) =>{
    
    
    const allData = await getApi();
    const dataByName = allData.filter((recipe)=>
    recipe.name.includes(name))
    
    
   
    return dataByName
}
module.exports= {getSearchByName}