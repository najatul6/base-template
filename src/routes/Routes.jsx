import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../layout/MainLayout"
import LogIn from "../pages/LogIn/LogIn"
import Register from "../pages/Register/Register"
import Error from "../pages/Error/Error"
import Home from "../pages/Home/Home"
import About from "../pages/About/About"
import Service from "../pages/Service/Service"
import Contact from "../pages/Contact/Contact"
import Features from "../pages/Features/Features"
import Pricing from "../pages/Pricing/Pricing"
import Enterprise from "../pages/Enterprise/Enterprise"
import Resources from "../pages/Resources/Resources"
import Support from "../pages/Support/Support"

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
                path:"Features",
                element:<Features/>
            },
            {
                path:"Resources",
                element:<Resources/>
            },
            {
                path:"Support",
                element:<Support/>
            },
            {
                path:"Enterprise",
                element:<Enterprise/>
            },
            {
                path:"About",
                element:<About/>
            },
            {
                path:"Contact",
                element:<Contact/>
            },
            {
                path:"Pricing",
                element:<Pricing/>
            },
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