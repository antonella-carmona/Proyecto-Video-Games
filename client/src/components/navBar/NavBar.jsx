import { Link } from "react-router-dom";
import style from "./NavBar.module.css";
import Search from "../../views/Search"


const NavBar = () =>{

    return(
        <div className={style.container}>
          <Link to="/home">HOME</Link>
          <Link to="/create">CREAR JUEGO</Link>
          <Search/>
         
          
        </div>
    )
}

export default NavBar;