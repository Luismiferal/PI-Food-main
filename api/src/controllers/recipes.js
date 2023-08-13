require('dotenv').config();
const { Recipe, Diet} = require('../db.js')
const { Op }= require('sequelize')
const axios = require('axios');



const{ YOUR_API_KEY }= process.env

const postRecipe= async(req, res)=>{
     try {
        const { name, summary, healthscore, image, steps, Diet } = req.body;
        const recipe = await Recipe.create({
            name: name,
            summary: summary,
            healthscore: healthscore,
            image: image,
            steps: steps
        });

        recipe.addDiets([...Diet])
    
        return res.status(200).json(recipe)
     } catch (error) {
        res.status(404).json({error:error})
     }
}


const getApi = async ()=>{
  try{
   const InfoApi = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=1763ac08417c432690106fbf0662e398&number=100&addRecipeInformation=true`
      );

      const dataApi = InfoApi.data;
        const results = dataApi.results;

   const recetas_db = await Recipe.findAll({
      include:[{
         model:Diet,
         attributes:["name"]
      }]
   });

   const apiMap =  results.map(el =>{
      let step = el.analyzedInstructions.map(a=>{
          return a.steps.map(as=>{
              return(`Step ${as.number}: ${as.step}.`)
          })
      });
      return({
          id: el.id,
          name: el.title.toLowerCase(),
          summary: el.summary.replace(/<[^>]+>/g, ""),
          healthScore: el.healthScore,
          steps: step[0],
          diets: el.diets.map(e=>{
              return{
                  name: e
              }
          }),
          image: el.image
          
      })
  })

  const conjunto = [...recetas_db, ...apiMap]
  const arrConj = conjunto.map(i=>{
      const arrDiets = i.diets.map(diet=>{
          return diet.name
      });

      return{
         id: i.id,
         name: i.name.toLowerCase(),
         summary: i.summary,
         healthScore: i.healthScore,
         steps: i.steps,
         diets: arrDiets,
         image: i.image,
         createdInDb: i.createdInDb
     }
 })
 return (arrConj)
 
}catch(error){
 return(Error(error))
}
}


const getDiets = async () =>{
   let diets=["Vegetarian","Lacto-Vegetarian","Ovo-Vegetarian","Vegan","Pescetarian","Paleo","Primal","Low FODMAP","Whole30","Gluten Free","Ketogenic"];
   try {
       const diet_types= diets.map(async dieta=>{
           return await Diet.findOrCreate({
               where:{name:dieta},
               defaults:{
                   name:dieta
               }
           })
       });
   } catch (error) {
       return(Error(error))
   }
};

const getById = async (id) =>{
   try{
       const recipe = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${YOUR_API_KEY}`)
       const dataRecipe = recipe.data;
       const stepAll = dataRecipe.analyzedInstructions.map(a=>{
           return a.steps.map(as=>{
               return(`Step ${as.number}: ${as.step}.`)
           })
       });
       const dataAll ={
           id:dataRecipe.id,
           name: dataRecipe.title,
           summary: dataRecipe.summary, //aqui mantener la consulta, puede que haya error en la respuesta de la api
           healthScore: dataRecipe.healthScore,
           steps: stepAll[0],
           diets: dataRecipe.diets,
           image: dataRecipe.image,
       }
       return(dataAll)
   }catch(error){
       return(Error(error))
   }
}

const getByIdDb = async(arg)=>{
   try{
       let receta_db= await Recipe.findByPk(arg,{
           include:Diet
       });
       return ({
           id: receta_db.id,
           name: receta_db.name.toLowerCase(),
           summary: receta_db.summary,
           healthScore:receta_db.healthScore,
           steps: [receta_db.steps],
           image: receta_db.image,
           diets: receta_db.diets.map(el=>{
               return(el.name)
           })
       })
   }catch(error){
       return(Error(error))
   }
   
}


module.exports={
postRecipe,
getApi,
getDiets,
getById,
getByIdDb 
}