import PRODUCTOS_DATA_JSON from '../data/PRODUCTOS_DATA_JSON.json' assert { type: 'json' };
import { collection, addDoc } from 'firebase/firestore'
import { db } from './config.js'

// para cargar los documentos en firebase ejecutar en terminal el siguiente comando:
// node src/firebase/upload.js

PRODUCTOS_DATA_JSON.forEach((el) => delete el.id)

const productosRef = collection(db, "productos")

PRODUCTOS_DATA_JSON.forEach((el) => {
    addDoc(productosRef, el)
})