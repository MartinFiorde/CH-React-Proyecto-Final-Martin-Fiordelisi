import "./Producto.scss";
import { useContext, useEffect, useState } from "react";
import { importarProductos } from "../../helpers/importarProductos";
import { useParams } from "react-router-dom";
import { ItemDetail } from "./ItemDetail";
import { useCount } from "../../hooks/useCount";
import { CarritoContext } from "./../../contexts/CarritoContext";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";

export const ItemDetailContainer = () => {
  const { agregarAlCarrito } = useContext(CarritoContext);
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const contador = useCount(1, 1, item?.stock);

  const handleAgregar = (count) => {
    agregarAlCarrito({ ...item, count }); // envio a la funcion un objeto completado con las variables de ...item, y le agrego el atributo count a ese nuevo objeto
  };

  useEffect(() => {
    setLoading(true);

    // CONEXION CON FIREBASE
    // 1. Armar una referencia (sync)
    const docRef = doc(db, "productos", id);
    // 2. Consumir esa referencia (async)
    getDoc(docRef)
      .then((doc) => {
        const docfb = {
          id: doc.id,
          ...doc.data()
        }
        setItem(docfb);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));

    // METODO PARA IMPORTAR UNA BD DESDE ARCHIVO LOCAL
    // importarProductos()
    //   .then((data) => setItem(data.find((item) => item.id === Number(id))))
    //   .catch((err) => console.log(err))
    //   .finally(() => setLoading(false));
  }, []);

  return <div className="container my-5">
    {loading
      ? <h2>Cargando...</h2>
      : <ItemDetail producto={item} contador={contador} agregar={handleAgregar} />
    } </div>;
};
