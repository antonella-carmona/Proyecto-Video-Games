const {getGenres} = require("../controllers/getAllGenresGame")

const getGenresGames= async (req, res)=>{
      
    try {
        const response = await getGenres()
    return res.status(200).json(response)

    } catch (error) {
      return  res.status(400).json({error: error.message})
    }
   
}

module.exports= {
    getGenresGames
}