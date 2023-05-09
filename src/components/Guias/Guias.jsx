import './Guias.scss'

export const Guias = () => {
    return (
        <div id="guias">
            <header className="container container__banner">
                <section className="flex banner">
                    <div className="banner__text">
                        <h1>Guías</h1>
                        <p>¡Aprende los mejores ejercicios junto a nuestros profesores!</p>
                    </div>
                    <img className="banner__img" src="../img/levantando-pesas.jpg" alt="hombre levantando pesas" />
                </section>
            </header>

            <main className="container grid column-row-start-end">
                <article className="grid__item--main grid__a bg-blue column-row-start-end-item">
                    <div id="carouselDeImagenes" className="carousel slide w-100" data-bs-ride="true">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselDeImagenes" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselDeImagenes" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselDeImagenes" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            <button type="button" data-bs-target="#carouselDeImagenes" data-bs-slide-to="3" aria-label="Slide 4"></button>
                            <button type="button" data-bs-target="#carouselDeImagenes" data-bs-slide-to="4" aria-label="Slide 5"></button>
                        </div>
                        <div className="carousel-inner">
                            <section className="carousel-item active">
                                <a className="d-block" href="https://www.youtube.com/watch?v=Djcl1wikmLw" target="_blank"><img className="grid__img--main rounded" src="https://img.youtube.com/vi/Djcl1wikmLw/maxresdefault.jpg" alt="video 1 carrousel rutina coordinada con musica" /></a>
                            </section>
                            <section className="carousel-item">
                                <a className="d-block" href="https://www.youtube.com/watch?v=tN9vkv2ppWg" target="_blank"><img className="grid__img--main rounded" src="https://img.youtube.com/vi/tN9vkv2ppWg/maxresdefault.jpg" alt="video 2 carrousel rutina 7 minutos con erin porea" /></a>
                            </section>
                            <section className="carousel-item">
                                <a className="d-block" href="https://www.youtube.com/watch?v=L_W4F6_c2Jg" target="_blank"><img className="grid__img--main rounded" src="https://img.youtube.com/vi/L_W4F6_c2Jg/maxresdefault.jpg" alt="video 3 carrousel rutina 30 minutos" /></a>
                            </section>
                            <section className="carousel-item">
                                <a className="d-block" href="https://www.youtube.com/watch?v=k_u8obkaGE4" target="_blank"><img className="grid__img--main rounded" src="https://img.youtube.com/vi/k_u8obkaGE4/maxresdefault.jpg" alt="video 4 carrousel rutina abdomen" /></a>
                            </section>
                            <section className="carousel-item">
                                <a className="d-block" href="https://www.youtube.com/watch?v=zzH07PoU1dI" target="_blank"><img className="grid__img--main rounded" src="https://img.youtube.com/vi/zzH07PoU1dI/maxresdefault.jpg" alt="video 5 carrousel rutina gluteos y abdomen" /></a>
                            </section>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselDeImagenes" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselDeImagenes" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </article>
                <h2 className="separador">Videos adicionales</h2>
                <article className="grid__item">
                    <a href="https://www.youtube.com/watch?v=mDSjJB1vj4E" target="_blank"><img className="grid__img rounded" src="https://img.youtube.com/vi/mDSjJB1vj4E/maxresdefault.jpg" alt="video 1 adicional tips peso muerto" /></a>
                </article>
                <article className="grid__item">
                    <a href="https://www.youtube.com/watch?v=Oc7toRMi5fY" target="_blank"><img className="grid__img rounded" src="https://img.youtube.com/vi/Oc7toRMi5fY/maxresdefault.jpg" alt="video 2 adicional tips dominadas" /></a>
                </article>
                <article className="grid__item">
                    <a href="https://www.youtube.com/watch?v=jDXK0_ZmyM8" target="_blank"><img className="grid__img rounded" src="https://img.youtube.com/vi/jDXK0_ZmyM8/maxresdefault.jpg" alt="video 3 adicional tips calistenia" /></a>
                </article>
                <article className="grid__item">
                    <a href="https://www.youtube.com/watch?v=peZG15in7nM" target="_blank"><img className="grid__img rounded" src="https://img.youtube.com/vi/peZG15in7nM/maxresdefault.jpg" alt="video 4 adicional entrenamiento fondo pecho vs triceps" /></a>
                </article>
                <article className="grid__item">
                    <a href="https://www.youtube.com/watch?v=RhRwe740WoQ" target="_blank"><img className="grid__img rounded" src="https://img.youtube.com/vi/RhRwe740WoQ/maxresdefault.jpg" alt="video 5 adicional tips repeticiones" /></a>
                </article>
            </main>
        </ div>
    );
};