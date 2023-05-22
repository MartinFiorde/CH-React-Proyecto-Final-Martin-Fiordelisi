import { useState } from 'react';
import './Contacto.scss'

export const Contacto = () => {
    const [values, setValues] = useState({
        nombre: '',
        email: '',
        tel: '',
        mensaje: '',
    })

    const handleInputChange = (e) => {
        console.log(e.target.name)

        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Submit")
        console.log(values)
    }

    return (
        <main id="contacto" className="container container__banner">
            <section className="flex banner">
                <div className="banner__text">
                    <h1>Contacto</h1>
                    <form className="flex__column" action="envio.php" method="post" onSubmit={handleSubmit}>
                        <label htmlFor="nombre">Nombre</label>
                        <input type="text" name="nombre" id="nombre" value={values.nombre} onChange={handleInputChange}/>
                        <label htmlFor="tel">Teléfono</label>
                        <input type="tel" id="tel" name="tel" value={values.tel} onChange={handleInputChange}/>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" value={values.email} onChange={handleInputChange}/>
                        <label htmlFor="mensaje">Dejanos tu mensaje</label>
                        <textarea name="mensaje" id="mensaje" cols="30" rows="10" onChange={handleInputChange}></textarea>
                        <div className="btns">
                            <input className="btn" type="submit" value="Enviar" />
                            <input className="btn" type="reset" value="Cancelar" />
                        </div>
                    </form>
                </div>
                <img className="banner__img" src="../img/karate.jpg" alt="mujer entrenando karate" />
            </section>
        </main>
    );
};