import { useForm } from "../hooks/useForm"

export const SimpleFormWithCustomHook = () => {

  const {formState,onInputChange,onResetForm,username,email,pass} = useForm({
    username:'',
    email:'',
    pass:'',
  })  

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
        <input
            type="password"
            className="form-control mt-2"
            placeholder="contraseña"
            name="pass"
            value={pass}
            onChange={onInputChange}
        />

        <button onClick={onResetForm} className="btn btn-primary mt-2">Borrar</button>
    </>
  )
}
