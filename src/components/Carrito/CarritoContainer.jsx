import "./Carrito.scss";
import { Carrito } from "./Carrito";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CarritoContext } from "../../contexts/CarritoContext";

export const CarritoContainer = () => {
  const { carrito, precioTotal, itemCountInCart, agregarAlCarrito, eliminarDelCarrito } = useContext(CarritoContext);

  if (carrito.length < 1) {
    return (
      <div id="carrito">
        <header className="flex container container__banner">
          <div className="banner__text">
            <h1 className="mb-0">Carrito vacio</h1>
            <div className="pb-4 flex flex-wrap justify-content-start">
              <Link className="btn d-inline my-1 py-2 px-4 mt-4" to={`/tienda`}>
                Ir a la tienda
              </Link>
            </div>
          </div>
        </header>
      </div>
    );
  }
  return (
    <div id="carrito">
      <header className="flex container container__banner">
        <div className="banner__text">
          <h1 className="mb-0">Carrito - Productos seleccionados</h1>
          <div className="pb-4 flex flex-wrap justify-content-start">
            <Link className="btn d-inline my-1 py-2 px-4 mt-4" to={`/tienda`}>
              Continuar Comprando
            </Link>
          </div>
          <div className="flex flex-wrap mt-4">
            <h2 className="card__title d-inline-block">Total a pagar: {precioTotal()}</h2>
          </div>
          <Link className="btn d-inline my-1 py-2 px-4" to={`/404`}>
            Confirmar compra
          </Link>
        </div>
      </header>
      {<Carrito productos={carrito} />}
    </div>
  );
};
