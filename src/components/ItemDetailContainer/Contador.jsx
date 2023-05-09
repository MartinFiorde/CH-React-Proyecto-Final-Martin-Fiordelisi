import { useCount } from "./../../hooks/useCount";

export const Contador = ({ precio, stock }) => {
  const { count, aumentar, reducir } = useCount(1, 1, stock);

  return (
    <>
      <div className="flex contador">
        <button onClick={reducir} className="btn py-2 ms-3 mb-3">
          -
        </button>
        <p className="card-text py-0">{count}</p>
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
