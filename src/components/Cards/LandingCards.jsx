export const LandingCards = () => {
  return (
    <>
      <figure>
        <img alt="icono diario" className="figure__img" src="../img/guia.svg" decoding="async" data-nimg="intrinsic" />
        <figcaption>
          <h3>Aprende. Registra. Mejora.</h3>
        </figcaption>
        <p>Mantener un diario de comidas te ayudara a comprender tus hábitos y aumenta la probabilidad de que alcances tus objetivos.</p>
      </figure>
      <figure>
        <img alt="icono código de barras" className="figure__img" src="../img/registro.svg" decoding="async" data-nimg="intrinsic" />
        <figcaption>
          <h3>Registro simplificado.</h3>
        </figcaption>
        <p>Lee los códigos de barras, guarda comidas y recetas, y usa las herramientas rápidas para registrar los alimentos de forma rápida y sencilla.</p>
      </figure>
      <figure>
        <img alt="icono zapato" className="figure__img" src="../img/motivacion.svg" decoding="async" data-nimg="intrinsic" />
        <figcaption>
          <h3>Mantén la motivación.</h3>
        </figcaption>
        <p>Únete a la mayor comunidad de preparación física del mundo y obtén asesoramiento, consejos y asistencia en todo momento.</p>
      </figure>
    </>
  );
};
