import "./Producto.scss";
import { useEffect, useState } from "react";
import { importarProductos } from "../../helpers/importarProductos";
import { useParams } from "react-router-dom";
import { ItemDetail } from "./ItemDetail";
import { useCount } from "../../hooks/useCount";

export const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const contador = useCount(1, 1, item?.stock);
  const { count } = contador;
  console.log("contador", contador);

  const handleAgregar = (count) => {
    console.log({ ...item, count });
  };

  useEffect(() => {
    setLoading(true);
    importarProductos()
      .then((data) => setItem(data.find((item) => item.id === Number(id))))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  return <div className="container my-5">{loading ? <h2>Cargando...</h2> : <ItemDetail producto={item} contador={contador} agregar={handleAgregar} />}</div>;
};
