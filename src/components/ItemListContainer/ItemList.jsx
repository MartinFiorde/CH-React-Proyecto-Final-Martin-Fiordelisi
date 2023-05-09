import { ItemCard } from "./ItemCard";

export const ItemList = ({ productos, loading }) => {
  return (
    <main className="container">
      <div className="row">
        {
          loading
            ? <h2>Cargando...</h2>
            : productos.map((producto) => <ItemCard item={producto} key={producto.id} />)
        }
      </div>
    </main>
  );
};
