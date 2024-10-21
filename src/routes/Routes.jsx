import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import LogIn from "../pages/LogIn/LogIn";
import Register from "../pages/Register/Register";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Features from "../pages/Features/Features";
import FeatureDesign from "../pages/Features/Design"; // Create this page
import FeatureManagement from "../pages/Features/Management"; // Create this page
import FeatureNavigation from "../pages/Features/Navigation"; // Create this page
import FeatureCMS from "../pages/Features/CMS"; // Create this page
import Pricing from "../pages/Pricing/Pricing";
import Enterprise from "../pages/Enterprise/Enterprise";
import Resources from "../pages/Resources/Resources";
import ResourceMarketplace from "../pages/Resources/Marketplace"; // Create this page
import ResourceMeetups from "../pages/Resources/Meetups"; // Create this page
import Support from "../pages/Support/Support";
import SupportHelp from "../pages/Support/Help"; // Create this page

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
                path: "features",
                element: <Features />,
                children: [
                    {
                        path: "design",
                        element: <FeatureDesign /> // Component for Design feature
                    },
                    {
                        path: "management",
                        element: <FeatureManagement /> // Component for Management feature
                    },
                    {
                        path: "navigation",
                        element: <FeatureNavigation /> // Component for Navigation feature
                    },
                    {
                        path: "cms",
                        element: <FeatureCMS /> // Component for CMS feature
                    },
                ]
            },
            {
                path: "resources",
                element: <Resources />,
                children: [
                    {
                        path: "marketplace",
                        element: <ResourceMarketplace /> // Component for Marketplace
                    },
                    {
                        path: "meetups",
                        element: <ResourceMeetups /> // Component for Meetups
                    },
                ]
            },
            {
                path: "support",
                element: <Support />,
                children: [
                    {
                        path: "help",
                        element: <SupportHelp /> // Component for Help
                    },
                ]
            },
            {
                path: "enterprise",
                element: <Enterprise />
            },
            {
                path: "about",
                element: <About />
            },
            {
                path: "contact",
                element: <Contact />
            },
            {
                path: "pricing",
                element: <Pricing />
            },
            {
                path: "*",
                element: <Error /> // Catch-all route for 404
            }
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
