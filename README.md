# CH-React-Proyecto-Final-Martin-Fiordelisi

Hola a todos! este repositorio contiene el resultado final de 2 meses de cursado en el programa de React dictado por la institución CoderHouse.

La aplicación fue desarrollada con el fin de generar un entorno dinámico donde usuario poseatodas las opciones necesarias para interactuar con un E-commerce, desde el filtrado y selección de productos hasta la generación de una orden de compra que persista en una base de datos (el detalle de la orden guardada se puede ver en consola al finalizar la compra). 

<p><a href="https://github.com/MartinFiorde/CH-React-Proyecto-Final-Martin-Fiordelisi/blob/main/checkout.jpg?raw=true" target="_blank"><img src="https://github.com/MartinFiorde/CH-React-Proyecto-Final-Martin-Fiordelisi/blob/main/checkout.jpg?raw=true" alt="checkout" width="50%" height="50%"/></a></p>

Link al portal en Netlify: https://ch-react-pf-maf.netlify.app/

<br/>

Para este proyecto se utilizaron las siguientes tecnologías:
* React.js como principal biblioteca de desarrollo
* JavaScript con extensión JSX como principal lenguaje de programación
* Vite como herramienta de construcción y configuración inicial del proyecto
* Node.js como gestor de paquetes/ dependencias
* Netlify como host de las funcionalidades frontend
* Firebase como soporte de las funcionalidades backend y de persistencia

<br/>

Adicionalmente se implementaron dependencias auxiliares como:
* Bootstrap para la generación de estilos genéricos
* Sass para la generación de estilos customizados
* SweetAlert2 para la generación de ventanas emergentes customizadas

<br/>

A continuación se detallan los componentes y funcionalidades complementarios implementados por fuera de los contenidos mínimos requeridos en la cursada:
* Desarrollo de un custom hook que le permite al usuario modificar la cantidad seleccionada de un producto en cualquier momento de la compra.
* Implementada la componetización de archivos de estilo Sass para que se integren mejor con la estructura de React.
* Implementado un sistema integrado a Firebase de registro, login y logout (el botón de logout se encuentra dentro de "Ficha").
* Portal de error 404 que redirige automaticamente al inicio en caso de ingresar a urls invalidas. 
* Testeo y revisión detallado de la aplicación, corrigiendo multiples errores grandes y chicos de código, para lograr ofrecer una experiencia de usuario sólida y con la menor cantidad posible de bugs (se priorizó la calidad de las funciones actuales, por sobre cantidad de funcionalidades a medio hacer).

<br/>

Funcionalidades quitadas/ pendientes de implementación por limitaciones de tiempo:
* Actualización de los stocks al generar ordenes de compra.
* Integrar la solapa de "Contacto" a firebase para permitir la persistencia de mensajes que pueda enviar el usuario.
* Integrar con React la lógica de "Entrenamiento" desarrollada en JS nativo del curso anterior (https://github.com/MartinFiorde/CH-JS---Proyecto-Final-Martin-Fiordelisi). La versión actual accesible en el proyecto es una versión estática.
* Integrar una vista a un submenu de "Mis Compras", y una vista para ver el detalle individual de cada orden de compra y seguimiento de su estado.

<br/>

El sitio web fue testeado en Google Chrome y Mozilla Firefox. La funcionalidad propia de la sección Tienda > Carrito > Checkout es 100% funcional en los navegadores web testeados, existiendo únicamente algunos bugs de accesibilidad y diseño, detallados a continuación:

    * Ligeros cambios de diseño no intencionados en Mozilla Firefox.
    * Al navegar por la página, algunas vistas se generan incorrectamente por un instante hasta que la vista condicional correcta es procesada por el ReactDOM (ej, navbar offline apareciendo fugazmente al iniciar la página cuando el usuario ya se encuentra previamente logueado).
    * Al navegar demasiado rápido por las vistas de Tienda > Carrito > Checkout, algunas veces el menú de tienda o checkout reenvian a la página de inicio por una falla de sincronización entre la aplicación y los componentes de persistencia (hooks y/o firebase).

Aprovecho para enviarle un agradecimiento enorme a todo el equipo de CoderHouse, al profesor Conrado Lanusse por la tremenda calidad de todas sus clases, y especialmente a mi tutor Cristian Ovejero, que en cada corrección me brindó feedback super completo y detallado sobre buenas practicas y puntos de mejora.

Mil gracias!
