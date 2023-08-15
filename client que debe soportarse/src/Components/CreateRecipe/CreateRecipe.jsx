import React, { useState, useEffect } from "react";
import { Link , useHistory} from "react-router-dom";
import { useDispatch , useSelector } from "react-redux";
import Nav from '../Nav 2/Nav';
import './CreateRecipe.scss';
import { getDiets, postRecipe } from "../../Actions";



export default function CreateRecipe(){
    
    const dispatch = useDispatch();
    const history = useHistory();
    const allDiets = useSelector((state)=> state.Diets);
    
    
    const [errors, setErrors] = useState({});
    const [input, setInput] = useState({
        name:"",
        summary:"",
        healthScore:0,
        steps:[],
        image:"",
        diet:[],
    });

    function validate(newRecipe){
        let errors = {};
        if (!input.name.length){
            errors.name = "Tu Receta Necesita Nombre!"
        } else if (!input.diet.length){
            errors.diet = "Tu receta necesita dieta"
        }else if (!input.summary){
            errors.summary = "Tu Receta necesita un Resumen!"
        } else if(input.image.length > 255){
            errors.image = `Url hasta 255 caracteres(Caracteres:${input.image.length})`
        }else if(input.summary.length > 255){
            errors.summary = `Summary hasta 255 caracteres(Caracteres:${input.summary.length})`
        }else if(input.steps.length > 255){
            errors.steps = `Steps hasta 255  caracteres(Caracteres:${input.steps.length})`
        }else if(input.name.length > 255){
            errors.steps = `Name hasta 255  caracteres(Caracteres:${input.steps.length})`
        }
        return errors
    }
    
    function handleChange(e){
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }))
        
    };

    function handleCheck(e){
        if(e.target.checked){
            setInput({
                ...input,
                diet: [...input.diet, e.target.value]
            })
            setErrors(validate({
                ...input,
                diet: [...input.diet, e.target.value]
            }))
            
        }
        if(!e.target.checked){
            setInput({
                ...input,
                diet: input.diet.filter(el=> el !== e.target.value)
            })
        }
    };

    function handleSubmit(e){
        if(!input.name){
            alert('Nombre required')
            return(false)
        }
        if(!input.summary){
            return(alert('Summary required'))
        }
        if(!input.diet.length){
            return(alert('Your Reipe required Diet'))
        }
        if(input.image.length > 255){
            return(alert('Url de image invalid'))
        }
        if(input.name.length > 255){
            return(alert('Name very long'))
        }
        if(input.summary.length > 255){
            return(alert('Summary very long'))
        }
        if(input.steps.length > 255){
            return(alert('Steps very long'))
        }
        if(input.healthScore > 100 || input.healthScore < 0){
            return(alert('Health Score invalid'))
        }
        if(!input.healthScore){
            input.healthScore = '50'
        }
        if(!input.steps){
            input.steps = 'your recipe has no steps'
        }
        if(!input.image){
                input.image ='https://bestessayseducation.com/uploads/71/TEXT_HERE.png'
        }
        else if (!/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#()?&//=]*)/.test(input.image)) {
            return alert("Url imagen invalid");
            }
        dispatch(postRecipe(input))
        alert('Recipe Created!!')
        setInput({
            name:"",
            summary:"",
            healthScore:0,
            steps:[],
            image:"",
            diets:[]
        })
        history.push('/home')
    };


    useEffect(()=>{
        dispatch(getDiets())
    },[dispatch]);

    const selecDiet = input.diet.join(' ,')

    return(
        <div className="form__container">
            <div className="div__constiner">
            <Nav/>
                <form onSubmit={(e) => handleSubmit(e)} className='form'>
                    <h1 className="title">Create Your Recipe</h1>
                    <div>
                        <div>
                            <h3 className="label_cont">Name:</h3>
                            <input className="input_cont" type='text' value={input.name} name='name' onChange={(e) => handleChange(e)} onPaste={(e) => handleChange(e)}/>
                            {errors.name && (<p className="error">{errors.name}</p>)}
                        </div>
                        <div className="cont-box">
                            <h3 className="label_cont dieta">Diets:</h3>
                            {allDiets.map(el=>{
                                return(
                                    <label className="checkbox">
                                        <input type='checkbox' name={el.name} value={el.name} onChange={(e) => handleCheck(e)} onPaste={(e) => handleCheck(e)}/>
                                        {el.name}
                                    </label>
                                )
                            })}
                            {errors.diet && (<p className="error">{errors.diet}</p>)}
                            {
                                selecDiet && <p className="select-diets">{selecDiet}</p>
                            }
                        </div>
                        <div>
                            <h3 className="label_cont">Summary:</h3>
                            <textarea className='input_cont resumen' type='text' value={input.summary} name='summary' onChange={(e) => handleChange(e)} onPaste={(e) => handleChange(e)}/>
                            {errors.summary && (<p className="error">{errors.summary}</p>)}
                        </div>
                        <div>
                            <h3 className="label_cont ">Health Score:</h3>
                            <div>
                            <input className='input_cont score' type="range" min="0" max="100" value={input.healthScore} name='healthScore' onChange={(e) => handleChange(e)}/>
                            <span className="score-text">{input.healthScore}</span>
                            </div>
                        </div>
                        <div>
                            <h3 className="label_cont">Url Image:</h3>
                            <input className='input_cont' type='text' value={input.image} name='image' onChange={(e) => handleChange(e)} onPaste={(e) => handleChange(e)}/>
                            {errors.image && (<p className="error">{errors.image}</p>)}
                        </div>
                        <div>
                            <h3 className="label_cont">Steps:</h3>
                            <textarea className='input_cont textarea' type='text' value={input.steps} name='steps'onChange={(e) => handleChange(e)} onPaste={(e) => handleChange(e)}/>
                            {errors.steps && (<p className="error">{errors.steps}</p>)}
                        </div>
                        
                        
                        <button type='submit' className='button-Nav3 btn_submit'>Create your new Recipe!</button>
                    </div>
                </form>
            </div>
        </div>
    )
};

