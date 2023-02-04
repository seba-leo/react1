import { Link, useNavigate } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"
import ItemCount from "../ItemCount/ItemCount"
import './ItemDetail.scss'
import { useState } from 'react'


const ItemDetail = ({ category, img, desc, price, id, stock }) => {

    const navigate = useNavigate()

    const handleVolver = () => {
        navigate(-1)
    }
    const [cantidad, setCantidad] = useState(1)


    const { Agregar, isInCart } = useCartContext()


    const AgregarCarrito = () => {
        const item = {
            category,
            img,
            desc,
            price,
            id,
            cantidad
        }
        Agregar(item)
    }

    return (
        <div className="Itemcard">
            <div className="card">
                <img src={img} className="img-fluid" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{desc}</h5>
                    <p className="card-text">precio:{price}</p>
                    <small>categoria: {category}</small>
                    <button className="btn btn-primary" onClick={handleVolver}>Volver</button>
                    {
                        !isInCart(id)
                            ? <ItemCount
                                cantidad={cantidad}
                                setCantidad={setCantidad}
                                max={stock}
                                onAdd={AgregarCarrito}
                            />
                            : <Link to="/cart" className="btn btn-success">Terminar mi compra</Link>
                    }
                </div>
            </div>
        </div>
    )
}

export default ItemDetail