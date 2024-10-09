import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../layout/MainLayout"
import LogIn from "../pages/LogIn/LogIn"
import Register from "../pages/Register/Register"
import Error from "../pages/Error/Error"

const Routes = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout/>,
        errorElement:<Error/>,
    },
    {
        path:"/logIn",
        element:<LogIn/>,
    },
    {
        path:"/register",
        element:<Register/>,
    }
])


export default Routes