import './Producto.scss'
import { useEffect, useState } from "react"
import { importarProductos } from "../../helpers/importarProductos"
import { useParams } from "react-router-dom"
import { ItemDetail } from "./ItemDetail"

export const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)
    const { id } = useParams()

    useEffect(() => {
        setLoading(true)

        importarProductos()
            .then((data) => setItem(data.find((item) => item.id === Number(id))))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }, [])

    return (
        <div className="container my-5">
            {
                loading
                    ? <h2>Cargando...</h2>
                    : <ItemDetail producto={item} />
            }
        </div>
    )
}


/*
import { useEffect, useState } from "react"
import { pedirDatos } from "../../helpers/pedirDatos"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import { importarProductos } from './../../helpers/importarProductos';



const ItemDetailContainer = () => {
    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()
    console.log(itemId)
    console.log(item)

    useEffect(() => {
        setLoading(true)

        pedirDatos()
            .then((data) => setItem( data.find((el) => el.id === Number(itemId)) ))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }, [])

    return (
        <div className="container my-5">
            {
                loading
                    ? <h2>Cargando...</h2>
                    : <ItemDetail item={item}/>
            }
        </div>
    )
}

export default ItemDetailContainer

*/