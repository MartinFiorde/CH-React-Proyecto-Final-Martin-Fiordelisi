import { CarritoCard } from "./CarritoCard";

export const Carrito = ({ productos, loading }) => {
  return (
    <main className="container">
      <div className="row">
        {
          loading
            ? <h2>Cargando...</h2>
            : productos.map((producto) => <CarritoCard item={producto} key={producto.id} />)
        }
      </div>
    </main>
  );
};
