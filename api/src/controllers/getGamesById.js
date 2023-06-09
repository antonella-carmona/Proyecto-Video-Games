
const {KEY} = process.env;
const URL = "https://api.rawg.io/api/games";
const axios = require("axios");
const {Videogame} = require("../db")

//findbypk --> trae por id los caracteres de un game de la bdd
//__________________________________________________________________
//Debe funcionar tanto para los games de la API como para los de la bdd
// este metodo nos ayuda acelerar la busqueda dentro de la base de datos
//_____________________________________________
//LLAMADO A API PARA OBTENER EL DETALLE DEL POKEMON
//     const gameDetail = await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`)
const getApiGamesById = async (id)=>{
  const {data} = await axios(`${URL}/${id}?key=${KEY}`)
  if(data){
    return {
        id: data.id,
        name: data.name,
        image: data.background_image,
        released: data.released,
        description: data.description_raw,
        rating: data.rating,
        genres: data.genres.map(g => g.name).join(','),
        platforms : data.platforms.map(p => p.platform.name).join(','),
        created: false
      }  
    
  }
  
}
//_____________________________________________
const getGameById = async (id, source)=>{

    const game = source === "API" ? getApiGamesById(id)
     : await Videogame.findByPk(id);
      return game;

}
module.exports= {
    getGameById
};