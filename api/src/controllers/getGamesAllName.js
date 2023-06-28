const axios = require("axios");
const {Videogame, Genres} = require("../db");
const APIURL= "https://api.rawg.io/api/games";
const {KEY} = process.env;
const { Op } = require("sequelize");



const bringAllGamesApi = async()=>{
    let apiInfo= [];
    for (let i= 1; i <= 5; i++) {
      const {data} = await axios.get(`${APIURL}?key=${KEY}&page=${i}`);
      apiInfo = [...apiInfo, ...data.results]
    }    
//---------------------------------------------------------
    const response= apiInfo.map((game)=> {
        const mapApi= {
            id: game.id,
            name: game.name,
            image: game.background_image,
            platforms: game.platforms.map(b=> b.platform.name),
            released: game.released,
            rating: game.rating,
            genres: game.genres.map( gen => gen.name),
            created: false
        }
        return mapApi;
    })
    return response;
}

//_____________________________________________

const getGamesName = async (name)=>{
    const allGames = await bringAllGamesApi();
    const gamesFilteredApi = allGames.filter( (detail) => 
    detail.name.toLowerCase().includes(name.toLowerCase()))
     
   //__________________________________________
     const gamesFilteredBD = await Videogame.findAll({
       where:{
        name: {[Op.iLike]:`%${name}%`}  
      },
      include:{
        model: Genres,
        attributes: ["name"],
        through: {attributes: []}
       }

     }) 
    const todos= [...gamesFilteredApi, ...gamesFilteredBD]
    if(todos.length) {
      return todos}
      else {
    throw new Error("No se encontro ningun juego con ese nombre") }
 }
 //____________________________________________________
 const getGamesAll= async ()=>{
  
    const responseBd= await Videogame.findAll(
    {
      include:{
         model: Genres,
         attributes: ["name"],
         through: {attributes: []}
        }
    }
    );
  
    const responseApi = await bringAllGamesApi(); 
    //-----------------

 

    //----------------
  
    const todos= [...responseBd ,...responseApi];
     return todos;
  }
//______________________________________________________

 module.exports={
    getGamesName,
    getGamesAll,
    bringAllGamesApi
 }