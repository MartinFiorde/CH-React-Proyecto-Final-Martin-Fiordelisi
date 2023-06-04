import { CartWidget } from './CartWidget';
import { NavbarItem } from './NavbarItem';
import { NAVBAR_ITEMS_DATA } from '../../data/NAVBAR_ITEMS_DATA';
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="container navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link className="navbar-brand nav__logo" to="/inicio">
          <img src="../img/logo.png" alt="logo fit tracker" />
        </Link>
        <button className="navbar-toggler me-4" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <img className="burger__icon" src="../img/burger-btn.svg" alt="burger icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-3 mb-lg-0">
            {NAVBAR_ITEMS_DATA.map((item) => <NavbarItem key={item.id} name={item.name} url={item.url} />)}
            <CartWidget />
          </ul>
        </div>
      </div>
    </nav>
  );
};
