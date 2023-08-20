const {getApi} = require('./recipes.js')

const getSearchByName = async (name) =>{
    
    
    const allData = await getApi();
    const dataByName = allData.filter((recipe)=>
    recipe.name.includes(name))
    
    
   
    return dataByName
}
module.exports= {getSearchByName}