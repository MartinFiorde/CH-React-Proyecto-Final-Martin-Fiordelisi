import { createContext, useState } from "react";

export const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (itemNuevo) => {
    if (carrito.some((item) => item.id === itemNuevo.id)) {
      const index = carrito.indexOf(carrito.find((item) => item.id === itemNuevo.id));
      carrito.splice(index, 1);
    }
    // FORMA CON METODOS PRIMITIVOS/NATIVOS DE JS    // const newCart = carrito.slice()    // newCart.push({ ...item, count })    // setCarrito(newCart);
    setCarrito([...carrito, itemNuevo]); // FORMA SINTETICA USANDO UN ARRAY LITERAL LLENADO CON ELEMENTOS DESESTRUCTURADOS
  };

  const eliminarDelCarrito = (itemABorrar) => {
    // if (carrito.some((item) => item.id === itemABorrar.id)) {
    //   const index = carrito.indexOf(carrito.find((item) => item.id === itemABorrar.id));
    //   carrito.splice(index, 1);
    // }
    // setCarrito([...carrito]);
    setCarrito(carrito.filter((item)=> item.id != itemABorrar.id))
  };

  const itemCountInCart = (id) => {
    let count = null;
    carrito.some((item) => item.id === id) && (count = carrito.find((item) => id === item.id).count);
    return count;
  };

  const precioTotal = () => {
    // FORMA CON METODOS PRIMITIVOS/NATIVOS DE JS    // let precio = 0;    // carrito.map((item) => (precio += item.precio * item.count));    // return precio;
    return carrito.reduce((accum, item) => accum + item.precio * item.count, 0);
  };

  const cantidadTotal = () => {
    if (carrito.length == 0) {
      return 0;
    } else {
      return carrito.reduce((accum, item) => accum + item.count, 0);
    }
  };

  return (
    <>
      <CarritoContext.Provider value={{ carrito, cantidadTotal, precioTotal, itemCountInCart, agregarAlCarrito, eliminarDelCarrito }}>{children}</CarritoContext.Provider>;
    </>
  );
};
