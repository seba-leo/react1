import stockproduct from '../products/stockproduct.json'assert { type: "json" }
import { db } from './config.js'
import { collection, addDoc } from 'firebase/firestore'

stockproduct.forEach(item => delete item.id)

const productosRef = collection(db, 'productos')

stockproduct.forEach(item => {
    addDoc(productosRef, item)
})