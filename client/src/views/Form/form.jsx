import { useState, useEffect } from "react";
import style from "./Form.module.css";
import {getAllGenres, getAllPlatforms} from "../../redux/actions/actions";
import {useDispatch, useSelector} from "react-redux";
import { useHistory } from 'react-router-dom';
import axios from "axios";
  //preventDefault() se utiliza para anular el comportamiento 
  //predeterminado de un evento y permitir el control personalizado del mismo
  //________________________________________________________________________
  //los input para su funcionamiento tiene que tener: onChange={} // value={state local} // name="xxx"
const Form = () =>{
  const dispatch = useDispatch();
  const genres = useSelector((state) => state.genres);
  const platforms = useSelector((state)=> state.platforms);
  const history = useHistory();



  useEffect(() => {
    dispatch(getAllGenres()); // Despacha la acción para obtener los géneros
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAllPlatforms()); // Despacha la acción para obtener los géneros
  }, [dispatch]);
//_________________________________________________________________________ 
//manejador inputs
  const [input, setInput] = useState({
        name: '',   
        description: '',
        released: '',
        rating:'',
        image:" ",
        platforms: [],
        genres: []
  });
  //manejador state de errores______________________________________________
  const [error, setError] = useState({
        name: '',   
        description: '',
        released: '',
        rating:'',
        image:" ",
        platforms: [],
        genres: []
  });
  // esta fn maneja el state local-> controladorCambios de los input_____________
  // //tiene que leer lo que escribi, y guardarlo en el estado local_____________
  const changeHandler = (event) =>{
    const propiedad= event.target.name;
    const valor = event.target.value;

    validate({...input, [propiedad]:valor})
    setInput({...input, [propiedad]:valor})
    
  }
 // fn valida que lo que se escriba en los input sea correcto_____________________________
 const validate = (stateForm) =>{
   if(/^[a-zA-ZÀ-ÖØ-öø-ÿ\s']+$/.test(stateForm.name)){
    setError({...error, name: "✔️"})
   } else{
    setError({...error, name:"Solo permite letras del alfabeto (a-z, A-Z)"})
   } if(stateForm.name==="") setError({...error, name:"Se debe completar este campo"})
   //______________________________________________________________________________________
   if(/^[a-zA-Z0-9\s.,'-]+$/.test(stateForm.description) && stateForm.description.length > 30 && stateForm.description.length < 200){
    setError({...error, description: "✔️"})
   } else{
    setError({...error, description:"Permite letras del alfabeto (a-z) y números.Debe tener minimo 20 caracteres"})
   } if(stateForm.description==="") setError({...error, description:"Se debe completar este campo"})
   //______________________________________________________________________________________
   if(/\.(jpg|jpeg|png|gif|bmp)$/i.test(stateForm.image)){
    setError({...error, image: "✔️"})
   } else{
    setError({...error, image:"La imagen debe ser una url valida"})
   } if(stateForm.image==="") setError({...error, image:"Se debe completar este campo"})
   //__________________________________________________________________________________
   if(stateForm.released){
    setError({...error, released: "✔️"})
   } else if(stateForm.released === ""){
    setError({...error, released:"Se debe completar este campo"})   
   }
   //_________________________________________________________________________________
   if(!stateForm.rating){
    setError({...error, rating: "El rating es obligatorio"})
   } 
   else if(stateForm.rating > 5 || stateForm.rating < 0) {
    setError({...error, rating:"El rating debe estar entre 0 y 5"})
   }
   else{
    setError({...error, rating: "✔️"})
   }
   //_________________________________________________________________________________
   if(!stateForm.genres){
    setError({...error, genres: "El genero es obligatorio"})
   } 
   else {
    setError({...error, genres: "✔️"})
   }
 } 
 //___________________FN SELECT GENRES Y PLAFORMS_____________________________________
 const selectChangeHandler = (event) => {
  const value = event.target.value
  setInput({ ...input, genres: [value] });
};
const selectChangeHandlerDos = (event) => {
  const value = event.target.value
  setInput({ ...input, platforms: [value] });
};

 //_________________________FN BOTON CREAR__________________________________________________________
 const submitHandler = (event)=>{
    event.preventDefault();
    if(input){
    axios.post("http://localhost:3001/videogames", input);

    alert("Videojuego creado!");
    setInput({
      name: "",
      description: "",
      released: "",
      image: "",
      platforms: [],
      genre: [],
      rating: "",
    });
    history.push("/home");
  }
 }

//_______________________________________________________________________________________
    return(
      <div className={style.containerFormulario}>
          <form onSubmit={submitHandler}>
            <div>
              <label>Name</label>
              <input type="text" value={input.name} onChange={changeHandler} name="name" required/>
              {error.name && <span>{error.name}</span>}

              <label>Imagen</label>
              <input type="text"value={input.image} onChange={changeHandler} name="image" required />
              {error.image && <span>{error.image}</span>}

              <label>Description</label>
              <input type="text" value={input.description} onChange={changeHandler} name="description"/>
              {error.description && <span>{error.description}</span>}

              <label>Fecha de lanzamiento</label>
              <input type="date" value={input.released} onChange={changeHandler} name="released"/>
              {error.released && <span>{error.released}</span>}

              <label>Rating</label>
              <input type="number" value={input.rating} onChange={changeHandler} name="rating"/>
              {error.rating && <span>{error.rating}</span>}

              <label>Platforms</label>
              <select name="platforms" onChange={selectChangeHandlerDos}>
                    {platforms && platforms.map((name) => (
                       <option key={name} value={name}>
                          {name}
                       </option> ))}
              </select>

              <label>Genero</label>
              <select onChange={selectChangeHandler}>
                 {genres && genres.map((genre) => (
                    <option key={genre.id} value={genre.name}>
                      {genre.name}
                    </option>
                  ))}
              </select>
              {error.genres && <span>{error.genres}</span>}


              <button type="submit">CREAR</button>
            </div>
          </form>
      </div>
    )
  } 
  
  export default Form;

//   <select onChange={(ev) => handleSelect(ev)}>
//   {genres &&
//     genres.map((genre) => (
//       <option key={genre.id} name='genre' value={genre.name}>
//         {genre.name}
//       </option>
//     ))}
// </select>

  // const [input, setInput] = useState({
  //   name: "",
  //   description: "",
  //   released: "",
  //   image: "",
  //   platform: [],
  //   genre: [],
  //   rating: "",
  // });

  // function handleSelect(ev) {
  //   if (platforms.find((p) => p.name === ev.target.value)) {
  //     if (input.platform.includes(ev.target.value)) {
  //       alert("la plataforma ya esta seleccionada");
  //     } else {
  //       setInput({
  //         ...input,
  //         platform: [...input.platform, ev.target.value],
  //       });
  //     }
  //   } else {
  //     if (input.genre.includes(ev.target.value)) {
  //       alert("El género ya está seleccionado");
  //     } else {
  //       setInput({
  //         ...input,
  //         genre: [...input.genre, ev.target.value],
  //       });
   //   }


//   <div className={style.containerGenres}>
//   <div>
//     <label>Genero:</label>
//     <select onChange={(ev) => handleSelect(ev)}>
//       {genres &&
//         genres.map((genre) => (
//           <option key={genre.id} name='genre' value={genre.name}>
//             {genre.name}
//           </option>
//         ))}
//     </select>
//   </div>
// </div>