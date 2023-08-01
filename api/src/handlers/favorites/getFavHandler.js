const getFavControllers= require("../../controllers/favorites/getFavControllers")


const getFavHandler = async (req, res)=>{
    //const {id} = req.params; //id del juego
   
   try {
    const allFav = await getFavControllers()
    return res.status(200).send(allFav)
   } catch (error) {
    return res.status(400).send(error);
   }
}

module.exports= {getFavHandler};