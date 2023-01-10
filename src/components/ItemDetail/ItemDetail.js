import { useNavigate } from "react-router-dom"
import './ItemDetail.scss'
const ItemDetail = ( {id, name, stock, category, img, desc, price} ) => {

    const navigate = useNavigate()

    const handleVolver = () => {
        navigate(-1)
    }

    return (
        <div className="Itemcard">
        <div className="card">
        <img src={img} className="img-fluid" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{desc}</h5>
            <p className="card-text">precio:{price}</p>
            <small>categoria: {category}</small>
            <button className="btn btn-primary" onClick={handleVolver}>Volver</button>
        </div>
        </div>

            {/* <ItemCount max={stock}/> */}
        </div>
    )
}

export default ItemDetail