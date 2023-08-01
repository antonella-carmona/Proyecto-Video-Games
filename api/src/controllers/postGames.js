const {Videogame, Genres} = require("../db")

//vamos a querer crearlo con el modelo videogame, utilizando metodo de sequelize
//create, crea un objeto que tiene las especificaciones del models
const createGameBD= async (name, image ,description, released, rating, platforms, genres, created)=>{
    
    //____________________________________
   const newGame= await Videogame.create({
    name,
    image ,
    description, 
    released, 
    rating,
    platforms, 
    created
    
    });
    //_____traeme todo lo que tengas en Genres________________________________
    const newGenre = await Genres.findAll({
        where: {
            name: genres
        }
    });
    //______a mi nuevo game creado agregame lo que traje recien de Genres_________________________________
    await newGame.addGenres(newGenre)
    // return newGame;


    //_______________________
      // Obtener el juego completo con los géneros asociados
  const gameWithGenres = await Videogame.findOne({
    where: { id: newGame.id },
    include:{
             model: Genres,
             attributes: ["name"],
             through: {attributes: []}
            }
  
  });

  return gameWithGenres;
} 

module.exports={
    createGameBD
}

//through: {attributes: []} //La propiedad through se utiliza en las relaciones de muchos a muchos para especificar la tabla intermedia que se quiere utilizar para relacionar ambos modelos.
//Al establecer through en un objeto que representa la tabla intermedia, puedes personalizar cómo se realiza la asociación y qué atributos se deben incluir o excluir.