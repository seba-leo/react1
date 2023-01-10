import { Link } from "react-router-dom"
const ItemList = ( {productos} ) => {

    return (
       
<div className='container'>
<div className='row row-cols-1 row-cols-md-4 g-4'>
{productos.length > 0 &&
productos.map((prod)=> (
<div key={prod.id}>
  <div className="col" >
    <div className="card" >
      <img src={prod.img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{prod.desc}</h5>
        <p className="card-text">precio:{prod.price}</p>
        <small>categoria: {prod.category}</small>
        <Link to={`/detail/${prod.id}`} className="btn btn-outline-primary">Ver más</Link>

      </div>
    </div>
   </div>
</div>
))
 }
</div>
</div>
    )
}

export default ItemList