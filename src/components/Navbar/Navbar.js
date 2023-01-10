import { Link } from 'react-router-dom'
import {CartWidget} from '../Widget/CartWidget'

export const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
        <CartWidget/>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">inicio</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/productos/botines">Botines</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page"to="/productos/Camiseta">Camiseta</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">Link</Link>
              </li>
              <li className="nav-item dropdown">
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}
