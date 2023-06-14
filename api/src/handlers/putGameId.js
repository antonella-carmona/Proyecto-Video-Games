const {putGame} = require("../controllers/putGameById")


// recibimos info por body para crear
const putGamesHandler = async (req, res)=>{
    const {id} = req.params;
    const {name, image ,description, released, rating, platforms, genres}= req.body;
  try {
    const response= await putGame(id, name, image ,description, released, rating, platforms, genres);
   return res.status(200).json(response)

  } catch (error) {
   return res.status(400).json({error:error.message})
  }

}

module.exports= {
putGamesHandler
}