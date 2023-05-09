import './Carrito.scss'

export const Carrito = () => {
    return (
        <main id="carrito" className="container">
            <section className="section">
                <h1>Ficha técnica</h1>
                <p>Revisa tu información personal y dale seguimiento a los resultados de tu entrenamiento</p>
            </section>
            <figure className="card__ flex__card row mb-4 g-0 border rounded overflow-hidden flex-lg-row flex-column shadow-sm h-md-250 position-relative">
                <div className="card__img col-auto">
                    <img className="card__img__content bd-placeholder-img rounded shadow-sm m-4" src="../img/user_placeholder.png" alt="icono pfp foto de usuario" aria-label="Placeholder: foto de usuario" focusable="false" />
                </div>
                <figcaption className="card__text col p-2 pe-0 d-flex flex-column position-static">
                    <h2 className="card__title d-inline-block mb-0">Martín Fiordelisi</h2>
                    <p className="card-text py-0"><strong>Edad: </strong>32 años</p>
                    <p className="card-text py-0"><strong>Altura: </strong>1,72 cm</p>
                    <p className="card-text py-0"><strong>Peso: </strong>70 kg</p>
                    <p className="card-text py-0"><strong>IMC: </strong>70 kg</p>
                    <p className="card-text py-0"><strong>Calorías diarias quemadas: </strong>2375 kcal</p>
                    <p className="card-text py-0 pb-3"><strong>Promedio horas semanales entrenadas: </strong>06:35 hs</p>
                </figcaption>
            </figure>
        </main>
    );
};