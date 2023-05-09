import { Link, useNavigate } from "react-router-dom";
import { useEffect } from 'react';

export const Error404 = () => {

    const navigate = useNavigate();

    useEffect(()=> {
        setTimeout(() => {
            navigate("/")
        }, 10000);
    })
    return (
        <header className="container container__banner">
            <section className="flex__column banner__404">
                <img className="banner__img__404" src="../img/404.gif" alt="error 404 pagina no encontrada" />
                <h1 className="banner__text__404">HTTP 404 No Encontrado</h1>
                <p className="banner__text__404">¿Quizás esta página se movió? ¿Se eliminó? ¿Se esconde en la cuarentena? ¿Nunca existió en primer lugar? Vamos a inicio e intentemos de nuevo... Preparate para ser redirigido!</p>
                <Link className="btn btn__404" to="/">Volver al inicio</Link>
            </section>
        </header>
    )
};



