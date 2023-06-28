import style from "./Detail.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getById, clear } from "../../redux/actions/actions";
import { Link } from "react-router-dom";
import { useEffect } from "react";


const Detail = (props) => {
  const { id } = props.match.params;
  const dispatch = useDispatch();
  const gameDetalle = useSelector((state) => state.detailGame);
 

  useEffect(() => {
    // console.log("verificar id ---------->",id)
    dispatch(getById(id));


    return()=>{
      dispatch(clear())
    }
  }, [dispatch, id]);

  // console.log("que id llega en el detail? ---------->",id)
  // const isUUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(id);
//_________________platforms y genres de string --> array_____________________________
  const platformsArray = gameDetalle?.platforms?.split(",") || [];
  const genresArray = gameDetalle?.genres?.split(",") || [];
  const genresArray2 = gameDetalle?.Genres || [];
  const todo= [...genresArray, ...genresArray2]
  console.log("es array? -->",platformsArray)
  console.log("es array del detalle de genres? -->",todo)
//___________________________________________________________________________

  return (
    <div className={style.container}>
    
      {gameDetalle.name ? (
        <Link to="/home">
          <div >
            <button id="work" type="button" name="Hover" className={style.backButton}>
              Volver!
            </button>
          </div>
        </Link>
      ) : (
        console.log("Error en el nombre")
      )}




      <div>
        <img className={style.image} 
          
          src={gameDetalle?.image}
        />
      </div>
      
      <h2>{gameDetalle?.name}</h2>

      <div  className={style.platformsContainer}>
        
        <span> <h4>Fecha lanzamiento: </h4>{gameDetalle?.released}</span>
        </div>
        <div>
        <h4> Plataformas:</h4>
         
          {platformsArray.length > 0 ? (
              platformsArray.map((elemento, index) => (
                <span key={index} className="platformItem">{elemento.trim()} | </span>
              ))
            ) : (
              <p>No se encontraron plataformas válidas</p>
            )}
        </div>
      

{/* //__________________________________________________ */}
       <div className={style.genresContainer}>
            <h4>Generos: </h4>
            <div >

            {/* -----------------------------------------
            {todo.length > 0 ? (
              todo.map((elemento, index) => (
              <span key={index}  className="platformItem">{elemento.trim()} | </span>
              ))
            ) : (
              <p>No se encontraron generos</p>
            )}
          --------------------------------------------- */}
            {Array.isArray(todo) ? (
          todo.map((item, index) => {
            if (typeof item === "string") {
              return  <span key={index} className="platformItem"> {item.trim()} | </span>;
            } else if (typeof item === "object") {
              for (let key in item) {
                return <span key={index} className="platformItem"> {item[key]} </span> ;
              }
            }
            return null;
          })
        ) : (
          <p>No genres available</p>
        )}
            </div>
      </div> 


{/* //__________________________________________________ */}      
    <details>
    <summary>Ver más</summary>
      <div  className={style.rating}>
          
           <h4>Rating:</h4> <span>{gameDetalle?.rating}</span>
           
      </div>

      <div className={style.description}>
          
           <h4>Description:</h4><span> {gameDetalle?.description}</span>
          
      </div>
     
      </details>
      









    </div>
  );
};

export default Detail;

