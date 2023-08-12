import style from "./Navbar.module.css"
import {Link} from "react-router-dom"


function Navbar(){
    return(
        <nav className={style.nav}>
            <Link to="/home">
            <h1 className={style.title}>Recipes</h1>
            </Link>
            <Link to="/create">
            <h2 className={style.subtitle}>Create Recipe</h2>
            </Link>
            <Link to="/">
            <h1 className={style.title}>{`Go Origin`}</h1>
            </Link>

        </nav>)
}

export default Navbar