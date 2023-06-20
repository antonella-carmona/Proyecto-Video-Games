const {bringAllGamesApi} = require("./getGamesAllName");


//Set verifica si ya existe en el conjunto antes de agregarlo, elimina duplicados de un array o para mantener un conjunto de elementos únicos.

//forEach itera sobre cada element del array  y ejecuta una función para cada elemento. 

//convertimos platformsSet en un array utilizando Array.from() ->agarra las propiedades

const getGamesFilter = async ()=>{
    const allGames = await bringAllGamesApi();
  const platformsSet = new Set();

  allGames.forEach((game) => {
    game.platforms.forEach((platform) => {
      platformsSet.add(platform);
    });
  });

  const platformsArray = Array.from(platformsSet);
  return platformsArray;

}

module.exports={getGamesFilter};