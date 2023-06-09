const axios = require("axios");
const {Videogame} = require("../db");
const APIURL= "https://api.rawg.io/api/games";
const {KEY} = process.env;
const { Op } = require("sequelize");

const bringAllGamesApi = async()=>{
    const {data} = await axios.get(`${APIURL}?key=${KEY}`);

    const response= data.results.map((game)=> {
        const mapApi= {
            id: game.id,
            name: game.name,
            imagen: game.background_image,
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
     
   
     const gamesFilteredBD = await Videogame.findAll({
       where:{
        name: {[Op.iLike]:`%${name}%`}  
      }
     }) 
    return [...gamesFilteredApi, ...gamesFilteredBD]
 }
 //____________________________________________________
 const getGamesAll= async ()=>{
  
    const responseBd= await Videogame.findAll();
  
    const responseApi = await bringAllGamesApi(); 
  
    return [...responseBd ,...responseApi];
  }
//______________________________________________________

 module.exports={
    getGamesName,
    getGamesAll,
    bringAllGamesApi
 }