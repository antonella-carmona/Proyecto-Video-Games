import { GETALLGAMES, GETBYNAMEGAME, GETBYIDGAME, GETGENRES, ALLPLATFORMS } from "../actionsTypes";

let inicialState= {
    copyAllGames: [],  //--> copia para que no se pisen 
    allGames: [],    // --> todos juegos
    genresData: [],
    detailGame: [],
    genres: [],   //-->  todos los generos
    platforms: [] //--> todas las plataformas
   
}

const rootReducer= (state= inicialState, action)=>{
  switch(action.type){
    case GETALLGAMES : return{
      ...state,
      allGames : action.payload,
      copyAllGames: [...action.payload],
    };
    case GETGENRES:
      return {
        ...state,
        genres: action.payload,
      };
    case ALLPLATFORMS:
        return {
          ...state,
          platforms: action.payload,
        };  
    case GETBYNAMEGAME:
          return {
            ...state,
            allGames: action.payload,
          };



    default: return {...state}
  }
}

export default rootReducer;