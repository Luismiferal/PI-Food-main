import style from "./Form.module.css"

function Form(){
    return (<>
    <div className={style.create}>
        <h3>Create New Recipe</h3>
   <form action="" onSubmit={(e)=>{e.preventDefault()}}>
        <label htmlFor="">Name: </label>
        <input className={style.placeholder} type="text"  placeholder="Recipe name..."/>
        <label htmlFor=""></label>
        <button>Create Recipe</button>
    
    </ form>

    </div>
    </>
    )
}

export default Form