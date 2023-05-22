import { useContext } from "react";
import { Link } from "react-router-dom";
import { CarritoContext } from "../../contexts/CarritoContext";

export const CartWidget = () => {
  const { carrito, cantidadTotal} = useContext(CarritoContext);
  return (
    <li className="nav-item nav__enlace">
      <Link className="nav-link" to="/carrito" rel="nofollow">
        <img className="cart__icon" src="../img/cart-btn.svg" alt="cart icon" />
        {!!carrito.length ? <span className="mx-1"> ({cantidadTotal()}) </span> : <span className="mx-2">  -  </span>}
      </Link>
    </li>
  );
};
