import { useEffect, useState } from "react"
import { pedirDatos } from "../../helpers/pedirDatos"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../../firebase/config"
import {Carusel} from '../carusel/Carusel'
import'./ILContainer.scss'
const ItemListContainer = () => {

    
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()


    useEffect(() => {
        setLoading(true)

        // 1.- referencia
        const productosRef = collection(db, "productos")
        const q = categoryId
                    ? query(productosRef, where("category", "==", categoryId) )
                    : productosRef
        // 2.- peticion asincronica
        getDocs(q)
            .then((resp) => {
                
                setProductos( resp.docs.map((doc) => {
                    return {
                        ...doc.data(),
                        id: doc.id
                    }
                }))
            })
            .finally(() => {
                setLoading(false)
            })

    }, [categoryId])


    return (
        <div className="Container">
            <Carusel/>
            <br/>
            <h1 className="h1">Nuestros productos</h1>
            <hr />
            {
                loading
                    ? <h2>Cargando...</h2>
                    : <ItemList productos={productos}/>
            }
        </div>
    )
}

export default ItemListContainer