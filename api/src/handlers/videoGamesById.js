//fn constrollers
const {getGameById} = require("../controllers/getGamesById");

// el metodo isNaN valida que (...) no sea un numero, si no es un numero da true
const gameById = async (req, res)=>{
    const {id} = req.params;
    const source = isNaN(id) ? "BDD" : "API"
    
    try {
      const response = await getGameById(id, source) //fn constrollers
      return  res.status(200).json(response)

    } catch (error) {
     return   res.status(400).json({error: error.message})
    }
}

module.exports= {
    gameById
}    