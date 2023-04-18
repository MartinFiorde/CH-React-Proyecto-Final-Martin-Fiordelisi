export const Footer = () => {
  return (
    <>
      <footer className="container footer flex">
        <img className="footer__logo" src="../img/logo.png" alt="logo fit tracker" />
        <div className="flex footer__botones">
          <p className="flex footer__p">Seguinos en nuestras redes</p>
          <ul className="flex footer__nav">
            <li>
              <a href="https://www.coderhouse.com/" className="footer__media" target="_blank">
                <img src="./img/facebook.png" alt="icono facebook link" />
              </a>
            </li>
            <li>
              <a href="https://www.coderhouse.com/" className="footer__media" target="_blank">
                <img src="../img/twitter.png" alt="icono twitter link" />
              </a>
            </li>
            <li>
              <a href="https://www.coderhouse.com/" className="footer__media" target="_blank">
                <img src="../img/instagram.png" alt="icono instagram link" />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

