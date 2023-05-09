import { Link } from 'react-router-dom';

export const ItemCard = ({ item }) => {
    return (
        <article className="col-md-6">
            <figure className="card__btn card__ flex__card row mb-4 g-0 border rounded overflow-hidden flex-md-row shadow-sm h-md-250 position-relative">
                <div className="card__img col-auto d-lg-block">
                    <img className="card__img__content bd-placeholder-img rounded shadow-sm m-4" src={item.img} alt={item.producto} aria-label="Placeholder: Cargando producto" focusable="false" />
                </div>
                <figcaption className="card__text col p-2 d-flex flex-column position-static">
                    <h2 className="card__title d-inline-block pe-0 mb-0">{item.producto}</h2>
                    <div>
                        <p className="mb-2 card-text"><strong>Categoría: </strong><br />{item.categoria}</p>
                        <p className="mb-2 card-text"><strong>Marca: </strong><br />{item.vendedor}</p>
                        <p className="ms-2 mb-3 mt-4 text-muted"><strong>Stock: </strong>{item.stock}</p>
                        <p className="ms-2 mb-3 card-text"><strong>Precio: </strong>{item.precio}</p>
                    </div>
                    <Link className="btn py-2 ms-3 mb-3" to={`/producto/${item.id}`}>Ver detalle</Link>
                </figcaption>
            </figure>
        </article>
    )
}
