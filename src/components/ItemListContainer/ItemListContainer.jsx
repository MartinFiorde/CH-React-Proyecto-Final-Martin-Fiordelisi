import "./ItemList.scss";
import { ItemList } from "./ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { importarProductos } from "./../../helpers/importarProductos";
import { ItemListFilters } from "./ItemListFilters";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/config";

export const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    setLoading(true);

    // CONEXION CON FIREBASE
    // 1. Armar una referencia (sync)
    const productosRef = collection(db, "productos");
    const q = id
      ? query(productosRef, where("categoria", "==", id))
      : productosRef;
    // 2. Consumir esa referencia (async)
    getDocs(q)
      .then((res) => {
        const docsfb = res.docs.map((doc) => {
          return {
            ...doc.data(),
            id: doc.id
          }
        })
        setProductos(docsfb);
        // return docsfb;
      })
      // .then((data) => (id ? setProductos(data.filter((item) => item.categoria === id)) : setProductos(data)))  //  SE REEMPLAZA CON LA QUERY PARA LIMITAR EL ENVIO DE INFO DESDE LA DB
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));

    // METODO PARA IMPORTAR UNA BD DESDE ARCHIVO LOCAL
    // importarProductos()
    //   .then((data) => (id ? setProductos(data.filter((item) => item.categoria === id)) : setProductos(data)))
    //   .catch((err) => console.log(err))
    //   .finally(() => setLoading(false));

  }, [id]);

  return (
    <div id="tienda">
      <ItemListFilters />
      <ItemList productos={productos} loading={loading} />
    </div>
  );
};
