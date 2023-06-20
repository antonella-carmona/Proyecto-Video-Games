import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getAllGames, getAllByName} from "../redux/actions/actions"

// import style from "../styles/SearchBar.module.css";


export default function SearchByName() {
    const dispatch = useDispatch();
    // const allGames = useSelector(state=>state.allGames);
    const [nameSearch, setNameSearch] = useState(""); 
  

    useEffect(() => {
      dispatch(getAllGames()); //--> despacha action
      
        
       // setFiltrado(allGamesName) // --> state local cargado con el state global
        // return () =>{
        //   chau se desmonto
        // }
      }, [dispatch]);

    //__________FN INPUT_________________
      const handleName =(event)=> {
        setNameSearch(event.target.value.toLowerCase());
       
      }
    //_________FN BOTON________________
    const handlerSubmit= (event)=>{
      event.preventDefault();
      dispatch(getAllByName(nameSearch))
    }  
  //_____________________________________________________________________________________________
    return (
      <div >
        <form onSubmit={handlerSubmit}>
          <input type='text' placeholder='Buscar videojuego'
            value={nameSearch}   onChange={handleName}   />
          <button type='submit'  >Buscar</button>
        </form>
       
      </div>
    );
  }