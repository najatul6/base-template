import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import Routes from "./routes/Routes";
import "./index.css";
import { AuthContext } from "./providers/AuthProvider";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthContext>
    <ToastContainer position="top-center" autoClose={3000} />
      <RouterProvider router={Routes} />
    </AuthContext>
  </StrictMode>
);
