import React from 'react'
import { BrowserRouter, } from "react-router-dom";
import { useLoginContext } from "../../src/context/LoginContext";
import PrivateRoutes from "../router/PrivateRoutes";
import PublicRoutes from "../router/PublicRoutes";

const AppRouter = () => {
    const { user } = useLoginContext()

    return (
        <BrowserRouter>
            { user.logged 
                ? <PrivateRoutes />
                : <PublicRoutes />
            }
        </BrowserRouter>
    )
}

export default AppRouter