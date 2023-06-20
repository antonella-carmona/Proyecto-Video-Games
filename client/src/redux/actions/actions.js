import axios from "axios";
import { GETALLGAMES, GETBYNAMEGAME, GETBYIDGAME, GETGENRES, POSTGAME, DELETEGAME, PUTGAME, ALLPLATFORMS } from "../actionsTypes/index";

export const getAllGames = ()=>{
  return async (dispatch)=> {
    const response = await axios.get("http://localhost:3001/videogames")
    return dispatch({
        type: GETALLGAMES,
        payload: response.data
    })
  }
}
//_____________________________________
export const getAllGenres = ()=>{
    return async (dispatch)=> {
        const response = await axios.get("http://localhost:3001/genres")
        return dispatch({
            type: GETGENRES,
            payload: response.data
        })
      }
}
//_______________________________________
export const getAllByName = (name) =>{
    return async (dispatch)=> {
        try {
            const response = await axios.get(`http://localhost:3001/videogames?name=${name}`)
            return dispatch({
            type: GETBYNAMEGAME,
            payload: response.data
        })
        } catch (error) {
            alert(error.response.data.error)
            
        }
        
      }
}
//______________________________________
export const getById = (id) =>{
    return async (dispatch)=> {
        const response = await axios.get(`http://localhost:3001/videogames/${id}`)
        return dispatch({
            type: GETBYIDGAME,
            payload: response.data
        })
      }
}
//_____________________________________
export const postGames= ()=>{
    return async (dispatch)=> {
        const response = await axios.post(`http://localhost:3001/videogames`)
        return dispatch({
            type: POSTGAME,
            payload: response
        })
      }
}
//_________________________________
export const deleteGame = (id) =>{
    return async (dispatch)=> {
        const response = await axios.delete(`http://localhost:3001/videogames/${id}`)
        return dispatch({
            type: DELETEGAME,
            payload: response
        })
      }
}
//______________________________________
export const putGame = (id) =>{
    return async (dispatch)=> {
        const response = await axios.put(`http://localhost:3001/videogames/${id}`)
        return dispatch({
            type: PUTGAME,
            payload: response
        })
      }
}
//_______________________________________
export const getAllPlatforms = ()=>{
    return async (dispatch)=> {
      const response = await axios.get("http://localhost:3001/platforms")
      return dispatch({
          type: ALLPLATFORMS,
          payload: response.data
      })
    }
  }
