import {CartContext} from '../../context/CartContext'
import {useContext} from 'react'
import { Link } from "react-router-dom"
import { FaTrashAlt } from "react-icons/fa"

const Cart = () => {

    const { cart, emptycart, totalCart, removerItem } = useContext(CartContext)


    if (cart.length === 0) {
        return (
            <div className="container my-5">
                <h2>Aun no compraste nada</h2>
                <hr/>
                <p>Aquí apareceran tus compras</p>
                <Link to="/" className="btn btn-primary">Volver</Link>
            </div>
        )
    }

    return (
        <div className="container my-5">
            <h2>Compra total</h2>
                <hr/>
                {
                    cart.map(item => (
                        <div key={item.id}>
                            <img src={item.img}/>
                            <h4>{item.desc}</h4>
                            <p>Cantidad: {item.cantidad}</p>
                            <p>Precio: ${item.price * item.cantidad}</p>
                            <button onClick={() => removerItem(item.id)} className="btn btn-outline-danger"><FaTrashAlt /></button>
                            <hr/>
                        </div>
                    ))
                }

                <h4>Total: ${ totalCart() }</h4>
            
            <button className="btn btn-danger" onClick={emptycart}>Vaciar carrito</button>
            <Link className="btn btn-success mx-2" to="/checkout">Terminar mi compra</Link>
        </div>
    )
}

export default Cart