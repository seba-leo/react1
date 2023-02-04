import react from 'react'
import './carusel.scss'



export const Carusel =()=>{
    return(
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://www.worldsoccershop.com/wcm/connect/89748207-e4af-448a-b8f6-046774557945/Argentina-World-Cup-Champions.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE-89748207-e4af-448a-b8f6-046774557945-okHqFFq" className="d-block w-100" id='img-carusel' alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5 className='h5'>AFA</h5>
        <p className='parrafo'>Comprate la nueva Camiseta de la Selección</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://www.worldsoccershop.com/wcm/connect/0567c96f-7e51-4fb2-98a3-5c2024f89324/Shop-France-National-Soccer-Team-Jerseys.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE-0567c96f-7e51-4fb2-98a3-5c2024f89324-odwIZGP" className="d-block w-100" id='img-carusel' alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://www.worldsoccershop.com/wcm/connect/3e3ef4eb-3926-43ac-9fcd-4a257e93b6d3/Shop-Japan-2022-Soccer-Jerseys.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE-3e3ef4eb-3926-43ac-9fcd-4a257e93b6d3-obFAJsn" className="d-block w-100" alt="..." id='img-carusel'/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    )
}