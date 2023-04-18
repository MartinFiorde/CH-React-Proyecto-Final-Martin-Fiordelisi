export const Navbar = () => {


  
  return (
    <nav className="container navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand nav__logo" href="./index.html">
          <img src="../img/logo.png" alt="logo fit tracker" />
        </a>
        <button className="navbar-toggler me-4" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <img className="burger__icon" src="../img/burger-btn.svg" alt="burger icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-3 mb-lg-0">
            <li className="nav-item nav__enlace">
              <a className="nav-link" href="./ficha.html">
                Ficha
              </a>
            </li>
            <li className="nav-item nav__enlace">
              <a className="nav-link" href="./entrenamientos.html">
                Entrenamientos
              </a>
            </li>
            <li className="nav-item nav__enlace">
              <a className="nav-link" href="./guias.html">
                Guías
              </a>
            </li>
            <li className="nav-item nav__enlace">
              <a className="nav-link" href="./contacto.html" rel="nofollow">
                Contacto
              </a>
            </li>
            <li className="nav-item nav__enlace">
              <a className="nav-link" href="./tienda.html" rel="nofollow">
                Tienda
              </a>
            </li>
            <li className="nav-item nav__enlace">
              <a className="nav-link" href="./tienda.html" rel="nofollow">
              <img className="cart__icon" src="../img/cart-btn.svg" alt="cart icon" /> 123
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
