import {CartWidget} from './CartWidget.js'
import react from 'react'

export const NavBar=()=>{
    return(
        <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
  <CartWidget/>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">enlace1</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">enlace2</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">enlace3</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item dropdown">
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}