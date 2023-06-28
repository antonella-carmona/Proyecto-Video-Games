const { Genres } = require("../db") //models
const axios = require("axios")
const {KEY} = process.env;


const getGenres = async () =>{
  //_______obtener el arr results con todos los objetos____________  
  const {data} = await axios.get(`https://api.rawg.io/api/genres?key=${KEY}`);


  //_______quedarme con todos los name de los generos de cada objeto--> map devuelve nuevo arr modificado______________
  const responseApi = await data.results.map( gen => gen.name)
  // [{"Action","Indie", "Adventure"}]
  //____________________________________________________________________________
  
  const mapName = responseApi.map((elm) => {
  
    // return { name: elm }; 
    // return [ elm  ]
    return  elm 
     // [{{name:"Action"},{name:"Indie"}, {name:"Adventure"}}]
  });
  //____________________________________________________________________________
 //_________por cada objeto del arr agarra name y guarda en la bdd del models Genres_________ 
 //->forEach itera sobre el arr
  mapName.forEach(element => {
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


