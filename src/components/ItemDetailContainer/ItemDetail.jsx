import { Link } from "react-router-dom";
import { Contador } from "./Contador";
export const ItemDetail = ({ producto }) => {
  return (
    <main id="producto" className="containercard__ flex__card row mb-4 g-0 rounded overflow-hidden flex-lg-row flex-column h-md-250 position-relative">
      <div className="card__img col-auto">
        <img className="card__img__content bd-placeholder-img rounded shadow-sm m-4" src={producto.img} alt={producto.producto} aria-label="Placeholder: imagen del producto" focusable="false" />
      </div>
      <figcaption className="card__text col p-2 pe-0 d-flex flex-column position-static">
        <h2 className="card__title d-inline-block mb-0">{producto.producto}</h2>
        <p className="card-text py-0">{producto.detalle}</p>
        <p className="card-text py-0">
          <strong>Categoría: </strong>
          {producto.categoria}
        </p>
        <p className="card-text py-0">
          <strong>Vendedor: </strong>
          {producto.vendedor}
        </p>
        <p className="card-text py-0">
          <strong>Stock: </strong>
          {producto.stock}
        </p>
        <p className="card-text py-0">
          <strong>Precio individual: </strong>
          {producto.precio}
        </p>

        <Contador precio={producto.precio} stock={producto.stock} />

        <Link className="btn py-2 ms-3 mb-3" to={`/`}>
          Agregar al carrito
        </Link>
      </figcaption>
    </main>
  );
};