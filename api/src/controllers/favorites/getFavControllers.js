const {Favorite, Videogame} = require("../../db")

const getFavControllers = async()=>{
    const allFav = await Favorite.findAll({
        // where:{id:id},
        include:{
            model: Videogame,
            // attributes: [],
           
           }
    })
    
   if(allFav) return allFav;
   return "No se encontro favorito"
}

module.exports= getFavControllers;