import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import LogIn from "../pages/LogIn/LogIn";
import Register from "../pages/Register/Register";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Features from "../pages/Features/Features";
import Pricing from "../pages/Pricing/Pricing";
import Enterprise from "../pages/Enterprise/Enterprise";
import Resources from "../pages/Resources/Resources";
import Support from "../pages/Support/Support";
import Design from "../pages/Features/Design/Design";
import FeatureManagement from "../pages/Features/Management/FeatureManagement";
import FeatureNavigation from "../pages/Features/Navigation/FeatureNavigation";
import FeatureCMS from "../pages/Features/CMS/FeatureCMS";
import ResourceMarketplace from "../pages/Resources/Marketplace/ResourceMarketplace";
import ResourceMeetups from "../pages/Resources/Meetups/ResourceMeetups";
import SupportHelp from "../pages/Support/Help/SupportHelp";

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/",
                element: <Home />
            },
        ]
    },
    {
        path: "/logIn",
        element: <LogIn />,
    },
    {
        path: "/register",
        element: <Register />,
    }
]);

export default Routes;
