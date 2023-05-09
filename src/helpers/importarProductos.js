import { PRODUCTOS_DATA } from './../data/PRODUCTOS_DATA';

export const importarProductos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(PRODUCTOS_DATA)
        }, 1000)
    })
}