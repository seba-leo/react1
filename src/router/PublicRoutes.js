import { Routes, Route, Navigate } from "react-router-dom"
import LoginScreen from "../components/Login/LoginScreen"
import RegisterScreen from '../components/RegisterScreen/RegisterScreen'


const PublicRoutes = () => {

    return (
        <Routes>
            <Route path="/login" element={ <LoginScreen /> }/>
            <Route path="registrer" element={ <RegisterScreen /> }/>
            <Route path="*" element={ <Navigate to="/login"/>} />
        </Routes>
    )
}

export default PublicRoutes