import { useEffect, useState } from "react"
import { Mensaje } from "./Mensaje";

export const SimpleForm = () => {

  const [formState, setFormState] = useState({
    username : 'strider',
    email: 'email@email.com'
  });

  const {username , email} = formState;

  // funcion para cmabiar el estado
  const onInputChange = ({target}) =>{
    const {name , value} = target;
    setFormState({
      ...formState,
      [ name ] : value,
    });
  }

  // el useEffect se llama cada vez que se redibuja
  // si queremos que solo se haga una vez ponemos el useEffect con las dependencias vacias
  useEffect(()=>{
    console.log('useEffect called!');

  }, []);


  // podemos hacer efectos secundarios ,  este es para cuando
  // hay un cambio en el formulario
  useEffect(()=>{
    console.log("useEfect Form");
  }, [formState]);

  // si queremos ir a revisar si el correo exites
  // en la BD , podemos usar un useEffect cuando el correo cambie
  useEffect(()=>{
    console.log('useEffect email');
  }, [email]);

  return (
    <>
        <h1 className="h1">SIMPLE FORMS </h1>
        <hr/>

        <input
            type="text"
            className="form-control"
            placeholder="Username"
            name="username"
            value={username}
            onChange={onInputChange}
        />

        <input
            type="email"
            className="form-control mt-2"
            placeholder="email@email.com"
            name="email"
            value={email}
            onChange={onInputChange}
        />
        {
          (username === 'colin') && <Mensaje />
        }
    </>
  )
}
