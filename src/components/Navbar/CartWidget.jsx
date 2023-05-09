import { Link } from "react-router-dom";

export const CartWidget = () => {
    return (
        <li className="nav-item nav__enlace">
            <Link className="nav-link" to="/carrito" rel="nofollow">
                <img className="cart__icon" src="../img/cart-btn.svg" alt="cart icon" /> 123
            </Link>
        </li>
    );
};
