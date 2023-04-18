
export const ItemListContainer = ( {greeting} ) => {

    return (
      <header className="container container__banner">
        <section className="flex banner">
          <div className="banner__text">
            <h1>Item List Container</h1>
            <p>{greeting}</p>
          </div>
          <img className="banner__img" src="./img/ciclista-2.jpg" alt="hombre andando en bicicleta" />
        </section>
      </header>
    )
}
