import "./ItemList.scss";
import { ItemList } from "./ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { importarProductos } from "./../../helpers/importarProductos";
import { Link } from "react-router-dom";

export const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    setLoading(true);
    importarProductos()
      .then((data) => (id ? setProductos(data.filter((item) => item.categoria === id)) : setProductos(data)))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <div id="tienda">
      <header className="flex container container__banner">
        <div className="banner__text">
          <h1>Filtrar por categoría</h1>
          <div className="pb-4 flex flex-wrap justify-content-start">
            <Link className="btn d-inline my-1 py-2 px-4" to={`/tienda/`}>
              Todos
            </Link>
            <Link className="btn d-inline my-1 py-2 px-4" to={`/tienda/Suplemento`}>
              Suplemento
            </Link>
            <Link className="btn d-inline my-1 py-2 px-4" to={`/tienda/Recipiente`}>
              Recipiente
            </Link>
            <Link className="btn d-inline my-1 py-2 px-4" to={`/tienda/Indumentaria`}>
              Indumentaria
            </Link>
            <Link className="btn d-inline my-1 py-2 px-4" to={`/tienda/Pesas`}>
              Pesas
            </Link>
          </div>
        </div>
      </header>
      {<ItemList productos={productos} loading={loading} />}
    </div>
  );
};
