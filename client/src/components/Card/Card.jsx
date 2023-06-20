import style from "./Card.module.css";
import {Link} from "react-router-dom";

//este tipo de component es un down por que es un component presentacional, no tiene una carga como tal mas que solo mostrar algo, osea no maneja logica en si.
//cada componente independientemente de su trabajo, tiene la posibilidad de manejar un estado local propio suyo, que es para trabajar su propio cuerpo digamos.
const Card = ({id, name, image, genres})=>{
  
    return(
      <div className={style.oneCard}>
        <Link to={`/detail/${id}`}>
           <h2>{name}</h2> 

           {image? (<img src={image} alt="" width='200px' height='200px' />)  :
           (< img src="https://cdn.pixabay.com/photo/2021/05/06/14/51/gamepad-6233583_960_720.png"
              alt="Not Found"
              width="350px"
              height="200px"  />  )}
            
            {genres?.map( (elem) =>  <h5> {elem} </h5>)}
            </Link>
      </div>
    )
  }
  
  export default Card;