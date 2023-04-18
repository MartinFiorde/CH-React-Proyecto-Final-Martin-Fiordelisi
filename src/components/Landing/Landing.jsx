import './Landing.scss'
import { LandingCards } from '../Cards/LandingCards';

export const Landing = () => {
  return (
    <>
      <header className="container container__banner">
        <section className="flex banner">
          <div className="banner__text">
            <h1>Una buena salud empieza por un buen entranamiento</h1>
            <p>¿Qué debe tener un plan de entrenamiento? El objetivo de un buen programa busca mejorar la condición, la constitución y la naturaleza del cuerpo en cuanto a flexibilidad, fuerza y resistencia. Y desde Fit Tracker te acercamos toda la ayuda lograrlo!</p>
          </div>
          <img className="banner__img" src="./img/hombre-estirando.jpg" alt="hombre elongando" />
        </section>
      </header>
      <main className="container">
        <section className="section">
          <h2>Bienvenido a Fit Tracker! Tu plataforma de entrenamiento</h2>
          <p>Las app pueden convertirse en unas de las mejores aliadas al momento de hacer ejercicio. Pese a que las mismas no pueden suplantar al ser humano, sí pueden ayudar a llevar un control más estricto en cuanto a rutinas y calorías se refiere.</p>
        </section>
        <section className="section">
          <h2>Las herramientas para tus objetivos</h2>
          <p>¿Quieres perder peso, tonificarte, reducir tu BMI o invertir en tu salud general? Te ofrecemos las funciones que necesitas para conseguirlo.</p>
          <div className="figure__container flex">
            <LandingCards />
          </div>
        </section>
      </main>
    </>
  );
};

