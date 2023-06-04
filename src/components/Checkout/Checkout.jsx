export const Checkout = ({handleSubmit, handleInputChange, user, precioTotal, formValues}) => {
    return (
        <main id="checkout" className="container container__banner">
            <section className="flex banner">
                <div className="banner__text">
                    <h1>Checkout</h1>
                    <form className="flex__column" onSubmit={handleSubmit}>
                        <label htmlFor="nombre">Nombre</label>
                        <input
                            id="nombre"
                            value={formValues.nombre}
                            type="text"
                            className="form-control mb-2"
                            name="nombre"
                            onChange={handleInputChange}
                        />
                        <label htmlFor="direccion">Código Postal</label>
                        <input
                            id="codigoPostal"
                            value={formValues.codigoPostal}
                            type="number"
                            className="form-control mb-2"
                            name="codigoPostal"
                            onChange={handleInputChange}
                        />
                        <label htmlFor="nombre">Calle y número</label>
                        <input
                            id="calle"
                            value={formValues.calle}
                            type="text"
                            className="form-control mb-2"
                            name="calle"
                            onChange={handleInputChange}
                        />
                        <label htmlFor="nombre">Piso/ Depto</label>
                        <input
                            id="pisoDepto"
                            value={formValues.pisoDepto}
                            type="text"
                            className="form-control mb-2"
                            name="pisoDepto"
                            onChange={handleInputChange}
                            maxlength="10"
                        />
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            value={user.email}
                            type="email"
                            className="form-control mb-2"
                            name="email"
                            disabled
                        />
                        <label htmlFor="precio">Valor total</label>
                        <input
                            id="precio"
                            value={`$ ${precioTotal()}`}
                            type="text"
                            className="form-control mb-2"
                            name="precio"
                            disabled
                        />
                        <div className="btns">
                            <input className="btn py-2" type="submit" value="Confirmar compra" />
                        </div>
                    </form>
                </div>
                <img className="banner__img" src="../img/checkout-img.jpg" alt="hombre cargando cajas" />
            </section>
        </main>
    );
};
