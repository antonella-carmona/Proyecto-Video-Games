const {getGamesFilter} = require("../controllers/getPlatforms");

const getPlatformsGames = async(req, res)=>{
   
    try {
       const response= await getGamesFilter()
       return  res.status(200).json(response)
     
    } catch (error) {
     return   res.status(400).json({error: error.message})
    }
}

module.exports={
    getPlatformsGames
}