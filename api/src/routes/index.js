const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
//______________________________________________________
//IMPORTAR LOS HANDLERS
const {getVideoGamesHandler} = require("../handlers/getVideoGamesHandler");
const {gameById} = require("../handlers/videoGamesById")
const {postGamesHandler} = require("../handlers/postVideoGamesHandler")
const {getGenresGames} = require("../handlers/genresVideosGames");
const { deleteGameById } = require('../handlers/deleteGame');
const {putGamesHandler} = require("../handlers/putGameId");
const {getPlatformsGames} = require("../handlers/getPlatforms");
const {getFavHandler} = require("../handlers/favorites/getFavHandler");
const {postFavHandler}=require('../handlers/favorites/postFavHandler');
//______________________________________________________

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


router.get('/videogames', getVideoGamesHandler);
//Obtiene un arreglo de objetos, donde cada objeto es un videojuego con su información.
//games todos y por name
//_____________________________________________________________________________//

router.get('/videogames/:id', gameById);
//Esta ruta obtiene el detalle de un videojuego específico. Es decir que devuelve un objeto con la información pedida en el detalle de un videojuego.
// El videojuego es recibido por parámetro (ID).
// Tiene que incluir los datos del género del videojuego al que está asociado.
// Debe funcionar tanto para los videojuegos de la API como para los de la base de datos.
//____________________________________________________________________________//

router.post('/videogames', postGamesHandler);
// Esta ruta recibirá todos los datos necesarios para crear un videojuego y relacionarlo con sus géneros solicitados.
// Toda la información debe ser recibida por body.
// Debe crear un videojuego en la base de datos, y este debe estar relacionado con sus géneros indicados (al menos uno).
//____________________________________________________________________________//
router.get('/genres', getGenresGames);
// Obtiene un arreglo con todos los géneros existentes de la API.
// En una primera instancia, cuando la base de datos este vacía, deberás guardar todos los géneros que encuentres en la API.
// Estos deben ser obtenidos de la API (se evaluará que no haya hardcodeo). Luego de obtenerlos de la API, deben ser guardados en la base de datos para su posterior consumo desde allí.
//________________________________________________________________________________
router.get('/platforms', getPlatformsGames);
//______________________________________________________________________________
router.delete("/videogames/:id", deleteGameById)
//____________________________________________________________________________
router.put("/videogames/:id", putGamesHandler)
//________________FAVORITOS___________________________________________


// const deleteFavHandler= require("../handlers/favorites/deleteFavHandler")

router.post('favoritos/',postFavHandler); //Creación de Aviso

router.get("favoritos/", getFavHandler ) //traer

// router.delete("/:id", deleteFavHandler ) //quitar

module.exports = router;
