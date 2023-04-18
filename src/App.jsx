import { useState } from "react";
import "./styles/style.scss";
import { Landing } from './components/Landing/Landing';
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';

export default function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer greeting="Hola Mundo! Primer entrega de curso React"/>
      <Landing />
      <Footer />
    </>
  );
}
