import react from 'react'
import { useState } from 'react'
const Carusel=()=>{
    return(
<div className='container'>
<div id="carouselExampleDark" className="carousel carousel-dark slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
      <img src="https://www.worldsoccershop.com/wcm/connect/08e14032-e36a-40f9-9363-a899f5a3eb22/Shop-England-National-Soccer-Team-Jerseys.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE-08e14032-e36a-40f9-9363-a899f5a3eb22-odwJwRD" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src="https://www.worldsoccershop.com/wcm/connect/89748207-e4af-448a-b8f6-046774557945/Argentina-World-Cup-Champions.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE-89748207-e4af-448a-b8f6-046774557945-okHqFFq" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src="https://www.worldsoccershop.com/wcm/connect/0567c96f-7e51-4fb2-98a3-5c2024f89324/Shop-France-National-Soccer-Team-Jerseys.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE-0567c96f-7e51-4fb2-98a3-5c2024f89324-odwIZGP" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://www.worldsoccershop.com/wcm/connect/3e3ef4eb-3926-43ac-9fcd-4a257e93b6d3/Shop-Japan-2022-Soccer-Jerseys.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE-3e3ef4eb-3926-43ac-9fcd-4a257e93b6d3-obFAJsn" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>


</div>
    )
}

export default Carusel