import { Link } from 'react-router-dom'
import {CartWidget} from '../Widget/CartWidget'
import { useLoginContext } from '../../context/LoginContext'
import './Navbar.scss'


export const Navbar = () => {
const {user,logout}=useLoginContext()
    return (
<nav className="navbar navbar-expand-lg bg-light">
<div className="container-fluid">
    <Link className="navbar-brand" to="/">TodoFutbol</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse nav justify-content-end" id="navbarNav">
        <ul className="navbar-nav">
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
                <Link className="nav-link active" aria-current="page"to="/productos/Balones">Balones</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link active" to="/contacto">Contacto</Link>
              </li>
              <li className="nav-item">
              <div className='header__container'>
                <p>Bienvenido: {user.email}</p>
                <button className='btn btn-danger' onClick={logout}>Logout</button>
            </div>
              </li>
            </ul>
            <CartWidget/>
          </div>
        </div>
      </nav>
      
    )
}