import { useEffect } from "react"

export const Mensaje = () => {
    // el useEffect se puede ejecutar codigo cuando deja de existir
    // el return es lo que hara cuando el componente deje de existir
    useEffect(() => {

        //console.log('Mensaje Creado');
        const cords = ({x,y}) =>{
          console.log(x);
          console.log(y);
        }
        window.addEventListener('mousemove',cords);
      return () => {
        //console.log('Mensaje Destruido');
        window.removeEventListener('mousemove',cords);
      }
    }, []);
    
    return (

    <>
        <h3 className="h3">El usuario ya existe</h3>
    </>
  )
}
