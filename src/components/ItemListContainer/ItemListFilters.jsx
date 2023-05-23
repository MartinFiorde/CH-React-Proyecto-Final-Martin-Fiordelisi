import { Link } from "react-router-dom";

export const ItemListFilters = () => {
  return (
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
  );
};
