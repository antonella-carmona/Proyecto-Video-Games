const postFavControllers=require('../../controllers/favorites/postFavControllers')

const postFavHandler =async(req,res)=>{
   //const {id} = req.body; //necesito el id del videogame
    try {
      const newFav = await postFavControllers( );
      return res.status(200).send(newFav);
    } catch (error) {
      return res.status(400).send(error.message);
  };

}

module.exports={postFavHandler};   