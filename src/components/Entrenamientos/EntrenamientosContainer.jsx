import { Link } from 'react-router-dom';
import './Entrenamientos.scss'
import "https://cdn.jsdelivr.net/npm/sweetalert2@11.7.3/dist/sweetalert2.all.min.js";
// import "../../js/entrenamientos"

export const EntrenamientosContainer = () => {

    return (
        <div id="entrenamientos">
            <header className="container container__banner">
                <section className="flex banner">
                    <div className="banner__text">
                        <h1>Entrenamientos</h1>
                        <p>¡Consulta todos tus entrenamientos en un solo lugar!</p>
                    </div>
                    <img className="banner__img" src="../img/ciclista-2.jpg" alt="hombre andando en bicicleta" />
                </section>
            </header>

            <main className="container">
                <div className="row">
                    <article className="col-md-6">
                        <figure className="card__btn card__ flex__card row mb-4 g-0 border rounded overflow-hidden flex-md-row shadow-sm h-md-250 position-relative">
                            <figcaption className="card__text col p-2 pe-0 d-flex flex-column position-static">
                                <h2 className="card__title d-inline-block mb-0">Ciclismo</h2>
                                <p className="mb-3 text-muted">Dic 30</p>
                                <p className="card-text"><strong>Duración: </strong><br />00:39:20 hs</p>
                                <p className="card-text"><strong>Calorias: </strong><br />272 kcal</p>
                                <p className="card-text"><strong>Vel. Prom.: </strong><br />9.55 km/h</p>
                                <Link className="card__ stretched-link" to={`/404`}></Link>
                            </figcaption>
                            <div className="card__img col-auto d-none d-lg-block">
                                <img className="card__img__content bd-placeholder-img rounded shadow-sm m-4" src="../img/entrenamientos/ciclismo.jpg" alt="icono ciclismo" aria-label="Placeholder: icono ciclismo" focusable="false" />
                            </div>
                        </figure>
                    </article>
                    <article className="col-md-6">
                        <figure className="card__btn card__ flex__card row mb-4 g-0 border rounded overflow-hidden flex-md-row shadow-sm h-md-250 position-relative">
                            <figcaption className="card__text col p-2 pe-0 d-flex flex-column position-static">
                                <h2 className="card__title d-inline-block mb-0">Artes marciales</h2>
                                <p className="mb-3 text-muted">Dic 23</p>
                                <p className="card-text"><strong>Duración: </strong><br />01:00:00 hs</p>
                                <p className="card-text"><strong>Calorias: </strong><br />414 kcal</p>
                                <p className="card-text"><strong>Frec. Card. Prom.: </strong><br />127 lpm</p>
                                <Link className="card__ stretched-link" to={`/404`}></Link>
                            </figcaption>
                            <div className="card__img col-auto d-none d-lg-block">
                                <img className="card__img__content bd-placeholder-img rounded shadow-sm m-4" src="../img/entrenamientos/karate.jpg" alt="icono artes marciales" aria-label="Placeholder: icono artes marciales" preserveAspectRatio="xMidYMid slice" focusable="false" />
                            </div>
                        </figure>
                    </article>
                    <article className="col-md-6">
                        <figure className="card__btn card__ flex__card row mb-4 g-0 border rounded overflow-hidden flex-md-row shadow-sm h-md-250 position-relative">
                            <figcaption className="card__text col p-2 pe-0 d-flex flex-column position-static">
                                <h2 className="card__title d-inline-block mb-0">Elongación</h2>
                                <p className="mb-3 text-muted">Dic 15</p>
                                <p className="card-text"><strong>Duración: </strong><br />01:00:00 hs</p>
                                <p className="card-text"><strong>Calorias: </strong><br />398 kcal</p>
                                <p className="card-text"><strong>Frec. Card. Prom.: </strong><br />106 lpm</p>
                                <Link className="card__ stretched-link" to={`/404`}></Link>
                            </figcaption>
                            <div className="card__img col-auto d-none d-lg-block">
                                <img className="card__img__content bd-placeholder-img rounded shadow-sm m-4" src="../img/entrenamientos/elongar.jpg" alt="icono elongación" aria-label="Placeholder: icono elongación" preserveAspectRatio="xMidYMid slice" focusable="false" />
                            </div>
                        </figure>
                    </article>
                    <article className="col-md-6">
                        <figure className="card__btn card__ flex__card row mb-4 g-0 border rounded overflow-hidden flex-md-row shadow-sm h-md-250 position-relative">
                            <figcaption className="card__text col p-2 pe-0 d-flex flex-column position-static">
                                <h2 className="card__title d-inline-block mb-0">Running</h2>
                                <p className="mb-3 text-muted">Dic 10</p>
                                <p className="card-text"><strong>Duración: </strong><br />01:00:00 hs</p>
                                <p className="card-text"><strong>Calorias: </strong><br />398 kcal</p>
                                <p className="card-text"><strong>Frec. Card. Prom.: </strong><br />106 lpm</p>
                                <Link className="card__ stretched-link" to={`/404`}></Link>
                            </figcaption>
                            <div className="card__img col-auto d-none d-lg-block">
                                <img className="card__img__content bd-placeholder-img rounded shadow-sm m-4" src="../img/entrenamientos/correr.jpg" alt="icono running" aria-label="Placeholder: icono running" preserveAspectRatio="xMidYMid slice" focusable="false" />
                            </div>
                        </figure>
                    </article>
                </div>
            </main>
        </div>
    );
};

