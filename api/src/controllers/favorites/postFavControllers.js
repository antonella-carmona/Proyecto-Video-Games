const {Favorite} = require("../../db") 



const postFavControllers= async (id)=>{ //recibe id del videgames
   const postFav = await Favorite.create({
    id: id  //creame un id donde agarra el id del videogames que entra por parametro
 });
   
   return postFav;
}

module.exports= postFavControllers;