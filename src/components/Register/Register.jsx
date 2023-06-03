import '../Login/Login.scss'
import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext"

export function Register() {
    const { register } = useContext(AuthContext);

    const [values, setValues] = useState({ email: '', password: '' });

    const handleInput = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("register values",values);
        register(values);
    };

    return (
        <main id='login' className='container my-5 flex__column'>
            <section className="flex banner">
                
                <form onSubmit={handleSubmit}>
                <h1>Formulario de registro</h1>
                    <label className='mx-2' htmlFor="email">Email</label>
                    <input 
                        id="email"
                        value={values.email}
                        type="email" 
                        className="form-control mb-2" 
                        name="email"
                        onChange={handleInput}
                    />
                    <label className='mx-2' htmlFor="password">Contraseña</label>
                    <input 
                        id="password"
                        type="password" 
                        value={values.password}
                        className="form-control mb-2" 
                        name="password"
                        onChange={handleInput}
                    />
                    <div className="btns mt-4 flex">
                        <button className="my-2 p-2 btn btn-primary" type="submit">Registrarme</button>
                        <Link className="m-2" to="/login">Ya tenes cuenta? Logueate acá!</Link>
                    </div>
                </form>
            </section>
        </main>
    );
    
}
