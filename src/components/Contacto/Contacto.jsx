import './Contacto.scss'

export const Contacto = () => {
    return (
        <main id="contacto" className="container container__banner">
            <section className="flex banner">
                <div className="banner__text">
                    <h1>Contacto</h1>
                    <form className="flex__column" action="envio.php" method="post" id="contacto">
                        <label htmlFor="nombre">Nombre</label>
                        <input type="text" name="nombre" id="nombre" />
                        <label htmlFor="tel">Teléfono</label>
                        <input type="tel" id="tel" />
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" />
                        <label htmlFor="mensaje">Dejanos tu mensaje</label>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
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