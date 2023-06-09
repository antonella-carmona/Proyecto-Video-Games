const {getGamesName, getGamesAll} = require("../controllers/getGamesAllName")


const getVideoGamesHandler= async (req, res)=>{
    const {name} = req.query;
   try {
    if(name) {
        const response= await getGamesName(name)
      return  res.status(200).json(response)
    } else{
        const secondeResp= await getGamesAll()
      return  res.status(200).json(secondeResp);
    }
   } catch (error) {
    return   res.status(400).json({error: error.message})
   }
   
} 

module.exports= {getVideoGamesHandler};
