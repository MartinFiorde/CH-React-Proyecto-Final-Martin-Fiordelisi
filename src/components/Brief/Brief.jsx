import { BriefCard } from "./BriefCard";

export const Brief = ({ productos, loading }) => {
  return (
    <main className="container">
      <div className="row">
        {
          loading
            ? <h2>Cargando...</h2>
            : productos.map((producto) => <BriefCard item={producto} key={producto.id} />)
        }
      </div>
    </main>
  );
};
