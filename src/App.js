import { Navbar } from "./components/Navbar/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Prueba from './clase9/Clase9'
import Carusel from './clase9/Ejercicio'
function App() {
  return (
    <BrowserRouter>

      <Navbar />
    <Carusel/>
      <Routes>
        <Route path="/" element={ <ItemListContainer /> }/>
        <Route path="/productos/:categoryId" element={ <ItemListContainer /> }/>
        <Route path="/detail/:itemId" element={ <ItemDetailContainer />} />
        <Route path="*" element={ <Navigate to={"/"}/> }/>
      </Routes>  
      {/* <Footer /> */}
    </BrowserRouter>
      



  );
}

export default App;

/* <Route path="/productos/search/:busqueda" element={ <ItemListContainer /> }/>
    <Route path="/nosotros" element={ <Nosotros /> }/>
    <Route path="/pokemon" element={ <PokeApi /> }/>
    <Route path="*" element={ <Error404 /> }/> */