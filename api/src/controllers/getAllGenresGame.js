const { Genres } = require("../db") //models
const axios = require("axios")
const {KEY} = process.env;


const getGenres = async () =>{
  //_______obtener el arr results con todos los elementos____________  
  const {data} = await axios.get(`https://api.rawg.io/api/genres?key=${KEY}`);
  //_______quedarme con todos los name de cada elemento______________
  const responseApi = await data.results.map( gen => gen.name)
 //_________por cada elemento del arr agarra name y guarda en la bdd del models Genres_________ 
  responseApi.forEach(element => {
        Genres.findOrCreate({
            where: {name: element}
        })
  });

 //____________busca a todos los generos guardados de la bdd models Genres
 const allGenres = await Genres.findAll()
 return allGenres;

}

module.exports= {
    getGenres
}


