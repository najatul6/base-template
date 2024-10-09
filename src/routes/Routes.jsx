import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../layout/MainLayout"
import LogIn from "../pages/LogIn/LogIn"
import Register from "../pages/Register/Register"
import Error from "../pages/Error/Error"
import Home from "../pages/Home/Home"
import About from "../pages/About/About"
import Service from "../pages/Service/Service"
import Contact from "../pages/Contact/Contact"

const Routes = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout/>,
        errorElement:<Error/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/services",
                element:<Service/>
            },
            {
                path:"/contact",
                element:<Contact/>
            }
        ]
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