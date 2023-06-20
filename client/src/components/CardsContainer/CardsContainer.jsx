import Card from "../Card/Card";
import style from "./CardsContainer.module.css";
import {useSelector} from "react-redux";



const CardsContainer = ()=>{
  const allGames = useSelector(state=>state.allGames)

  return(
    <div className={style.container}>
        
        {allGames.map(game =>{
            return <Card
             id= {game.id}
             name= {game.name}
             image= {game.image}
             released= {game.released}
             description= {game.description}
             rating= {game.rating}
             genres= {game.genres}                                                                  
        platforms= {game.platforms}
        created= {game.created}
            />
        })  }
    </div>
  )
}

export default CardsContainer;