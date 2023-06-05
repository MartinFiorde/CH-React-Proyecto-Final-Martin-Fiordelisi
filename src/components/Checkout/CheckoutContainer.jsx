import './Checkout.scss';
import { useState, useContext } from 'react';
import { CarritoContext } from '../../contexts/CarritoContext';
import { AuthContext } from '../../contexts/AuthContext';
import { Navigate } from 'react-router-dom';
import { collection, addDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { Checkout } from './Checkout';

// SweetAlert2
const MySwal = withReactContent(Swal);
const swalBaseStyle = MySwal.mixin({
    customClass: {
        confirmButton: 'btn py-3 px-5',
        cancelButton: 'btn'
    },
    buttonsStyling: false
})

// Componente CheckoutContainer
export const CheckoutContainer = () => {

    const { user } = useContext(AuthContext);
    const { carrito, vaciarCarrito, precioTotal, cantidadTotal } = useContext(CarritoContext);
    const [values, setValues] = useState({
        nombre: '',
        codigoPostal: '',
        calle: '',
        telefono: '',
    });

    if (carrito.length == 0) {
        return (<Navigate to={"/inicio"} />);
    };

    const validaciones = (values) => {
        const { nombre, calle, codigoPostal, telefono } = values;

        if (nombre.length < 5) {
            swalBaseStyle.fire(
                '',
                'El nombre es demasiado corto',
                'warning'
            )
            return null;
        }
        if (codigoPostal < 1000 || codigoPostal > 9999) {
            swalBaseStyle.fire(
                '',
                'El código postal debe contener 4 digitos válidos',
                'warning'
            )
            return null;
        }

        if (calle.length < 5) {
            swalBaseStyle.fire(
                '',
                'La dirección es demasiado corta',
                'warning'
            )
            return null;
        }

        if (telefono.length < 5) {
            swalBaseStyle.fire(
                '',
                'El numero telefónico es demasiado corto',
                'warning'
            )
            return null;
        }
        return true;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const { nombre, calle, telefono, codigoPostal } = values;

        if (!validaciones(values)) {
            return null;
        }

        const ordenDeCompra = {
            client: nombre,
            email: user.email,
            items: carrito.map(item => ({ id: item.id, producto: item.producto, count: item.count })),
            totalValue: precioTotal(),
            ItemsCuantity: cantidadTotal(),
            adress: `Calle: ${calle}, CP: ${codigoPostal}`,
            phone: telefono,
            status: "GENERATED",
            timestamp: new Date()
        }
        
        console.log("Orden de compra", ordenDeCompra);
        const ordersRef = collection(db, "ordenesDeCompra");
        addDoc(ordersRef, ordenDeCompra)
            .then((doc) => {
                console.log("doc", doc.id);
                swalBaseStyle.fire(
                    'Compra terminada!',
                    'En breve estarás recibiendo novedades del distribuidor.\nTu numero de orden es el siguiente. Anotalo! \n' + doc.id,
                    'success'
                )
                    .then((result) => vaciarCarrito());
            })
    };

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    };

    return (
        <Checkout handleSubmit={handleSubmit} handleInputChange={handleInputChange} user={user} precioTotal={precioTotal} formValues={values} />
    );
};
