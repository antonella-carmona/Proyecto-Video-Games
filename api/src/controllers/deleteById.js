const {Videogame, Genres} = require("../db")

const deleteGameId = async (id)=>{
  await Videogame.destroy({
    where: {
        id: id
    }
  })
}

module.exports={
    deleteGameId
}