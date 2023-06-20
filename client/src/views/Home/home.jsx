import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import {getAllGames} from "../../redux/actions/actions";
import style from "./Home.module.css";

// que haga dispatch despache la actions


const Home = () =>{
  const dispatch = useDispatch();
  // const allGames = useSelector(state=>state.allGames);
  // const [filtered, setFiltered] = useState([]);
  // const [search, setSearch] = useState("");
//______________monta-actualiza-desmonta_____________________________________________________________
//useEffect()--> maneja los ciclos de vidas de este component particular
  useEffect(()=>{
  dispatch(getAllGames())
  // setFiltered(allGames)
  },[dispatch]); //--> cada vez que se ctualize algo de getAllGames
//________________FN PARA NAVBAR -> SEARCH____________________________________________________________  
// const handleChange= (event)=>{
//   setSearch(event.target.value.ToLowerCase())
// }
// const handlerSubmit= (event)=>{
//   event.preventDefault();
//   if(search !== ""){
//     const filt= filtered.filter((game) => 
//     game.name.ToLowerCase().includes(search))
//     return setFiltered(filt)
//   }
//   else{
//   setFiltered(allGames)
//   }
// }
//_____________________________________________________________________________

  return(
    <div className={style.contenedorHome}>
        <h1 className={style.titleHome}>Home</h1>
        <CardsContainer/>
    </div>
  )
}

export default Home;

