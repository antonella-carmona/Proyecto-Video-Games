const {createGameBD} = require("../controllers/postGames")


// recibimos info por body para crear
const postGamesHandler = async (req, res)=>{
  try {
    const {name, image ,description, released, rating, platforms, genres, created}= req.body;
    
    const response= await createGameBD(name, image ,description, released, rating, platforms, genres, created);
   return res.status(200).json(response)

  } catch (error) {
   return res.status(400).json({error:error.message})
  }

}

module.exports= {
postGamesHandler
}