const {Videogame, Genres} = require("../db")

const putGame = async(id, name, image ,description, released, rating, platforms, genres)=>{
   const post = await Videogame.findByPk(id, {
    include:{
        model: Genres,
        attributes: ["name"],
        through: {attributes: []}
       }
   });
   if(!post){
    return  `No existe el id:${id}`
   } 
   else{
    post.name= name
    post.image= image
    post.description= description
    post.released= released
    post.rating= rating
    post.platforms= platforms
    
    // Eliminar las relaciones existentes con los géneros
    await post.setGenres([]);
    
     // traeme todos los géneros cargados en la base de datos , sus names
  const newGenres = await Genres.findAll({
    where: {
      name: genres,
    }
  });
    
     // Asignar los nuevos géneros al post
  await post.setGenres(newGenres);
      // Guardar los cambios en la base de datos
   await post.save();
   }
   return post;
}

module.exports={
    putGame
}