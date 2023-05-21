import { useCount } from "./../../hooks/useCount";

export const Contador = ({ precio, contador }) => {
  const { count, aumentar, reducir } = contador;

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
        {precio * count}
      </p>
    </>
  );
};
