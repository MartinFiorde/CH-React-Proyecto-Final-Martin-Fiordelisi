import { useContext, useEffect } from "react";
import { CarritoContext } from "./../../contexts/CarritoContext";

export const Contador = ({ producto, contador }) => {
  const { count, aumentar, reducir, setear } = contador;
  const { carrito } = useContext(CarritoContext);

  useEffect(() => {
    if (carrito.some((item) => producto.id === item.id)) {
      setear(carrito.find((item) => producto.id === item.id).count);
    }
  }, []);

  return (
    <>
      <div className="flex contador">
        <button onClick={reducir} className="btn py-2 ms-3 mb-3">
          -
        </button>
        <p className="card-text py-0">{count}</p>
        {/* <input className="card-text py-0" type="number" value={count} /> */}
        <button onClick={aumentar} className="btn py-2 ms-3 mb-3">
          +
        </button>
      </div>
      <p className="card-text py-0">
        <strong>Valor total: </strong>
        {producto.precio * count}
      </p>
    </>
  );
};
