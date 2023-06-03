import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { Navbar } from "../components/Navbar/Navbar";
import { Footer } from "../components/Footer/Footer";

import { Landing } from "../components/Landing/Landing";
import { Ficha } from "../components/Ficha/Ficha";
import { EntrenamientosContainer } from "../components/Entrenamientos/EntrenamientosContainer";
import { Guias } from "../components/Guias/Guias";
import { Contacto } from "../components/Contacto/Contacto";
import { ItemListContainer } from "../components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "../components/ItemDetailContainer/ItemDetailContainer";
import { CarritoContainer } from '../components/Carrito/CarritoContainer';
import { Error404 } from "../components/Error404/Error404";
import { NavbarNoLogued } from './../components/Navbar/NavbarNoLogued';
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Register } from './../components/Register/Register';
import { Login } from './../components/Login/Login';


export default function AppRouter() {
  const { user } = useContext(AuthContext);
  return (
    <BrowserRouter>
      {
        user.logged
          ? <>
            <Navbar />
            <Routes>
              
              <Route path="/" element={<Navigate to={"/inicio"} />} />
              <Route path="/login" element={<Navigate to={"/inicio"} />} />
              <Route path="/registro" element={<Navigate to={"/inicio"} />} />
              <Route path="/inicio" element={<Landing />} />
              <Route path="/ficha" element={<Ficha />} />
              <Route path="/entrenamientos" element={<EntrenamientosContainer />} />
              <Route path="/guias" element={<Guias />} />
              <Route path="/contacto" element={<Contacto />} />
              <Route path="/tienda/" element={<ItemListContainer />} />
              <Route path="/tienda/:id" element={<ItemListContainer />} />
              <Route path="/producto/:id" element={<ItemDetailContainer />} />
              <Route path="/carrito" element={<CarritoContainer />} />
              <Route path="/logout" element={<Navigate to={"/inicio"} />} />
              <Route path="/*" element={<Error404 />} />
            </Routes>
            <Footer /> 
          </>
          :
          <>
            <NavbarNoLogued />
            <Routes>
              <Route path="/" element={<Navigate to={"/inicio"} />} />
              <Route path="/ficha" element={<Navigate to={"/inicio"} />} />
              <Route path="/inicio" element={<Landing />} />
              <Route path="/login" element={<Login />} />
              <Route path="/registro" element={<Register />} />
              <Route path="/*" element={<Error404 />} />
            </Routes>
            <Footer />
          </>


      }
    </BrowserRouter>
  );
}
