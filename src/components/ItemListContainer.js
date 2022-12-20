import react from 'react'

export const ItemListContainer=()=>{
    return(
<div className="card" style={{width:'18rem'}}>
<img src="https://media.tycsports.com/files/2022/12/18/517305/argentina-parche-nuevo-y-estrellas_862x485.webp" class="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">3 estrellas</h5>
    <p className="card-text">Nueva camiseta de la seleccion</p>
    <a href="#" className="btn btn-primary">comprar</a>
  </div>
</div>
    )
}