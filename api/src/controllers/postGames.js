const {Videogame, Genres} = require("../db")

//vamos a querer crearlo con el modelo traido , utilizando un metodo de sequelize
//create, crea un objeto que tiene las especificaciones del models
const createGameBD= async (name, background_image ,description, released, rating, platforms,genres, created)=>{
    //____________________________________
   const newGame= await Videogame.create({
    name,
    background_image ,
    description, 
    released, 
    rating,
    platforms, 
    created
    
    });
    //_____________________________________
    const newGenre = await Genres.findAll({
        where: {
            name: genres
        }
    });
    //_______________________________________
    await newGame.addGenres(newGenre)
     //return newGame;
} 

module.exports={
    createGameBD
}