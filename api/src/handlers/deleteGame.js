const {deleteGameId}= require("../controllers/deleteById")

const deleteGameById= async(req, res)=>{
    const {id} = req.params;
  try {
    await deleteGameId(id)
    res.status(200).send(`game id:${id} eliminado exitosamente`);
  } catch (error) {
    res.status(400).json({error: error.message});
  }
}

module.exports={
    deleteGameById
}