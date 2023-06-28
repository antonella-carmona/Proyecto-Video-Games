import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {getAllGames, getAllByName, clear} from "../../redux/actions/actions";
import style from "./Search.module.css";


// import style from "../styles/SearchBar.module.css";


export default function SearchByName() {
    const dispatch = useDispatch();
    const [nameSearch, setNameSearch] = useState(""); 
  
    //_________MONTAJE__________________
      useEffect(() => {
        dispatch(getAllGames()); //--> despacha action

        return()=>{
          dispatch(clear())
        }
      }, [dispatch]);

    //__________FN INPUT_________________
      const handleName =(event)=> {
        setNameSearch(event.target.value.toLowerCase());
       
        if (!event.target.value) {
          dispatch(getAllGames());
        }
    
      }
    //_________FN BOTON________________
    const handlerSubmit= (event)=>{
      event.preventDefault();
      dispatch(getAllByName(nameSearch))
    }  

  //_____________________________________________________________________________________________
    return (
      <div  className={style.searchbar} >
        <form onSubmit={handlerSubmit}>
          <input type='text' placeholder='Buscar juegos'
            value={nameSearch}   onChange={handleName}   />
          <button type='submit'  >Buscar</button>
        </form>



      </div>
    );
  }