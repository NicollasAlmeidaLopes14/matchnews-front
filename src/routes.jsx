import { createBrowserRouter, Navigate } from "react-router-dom";

import NewsListing from "./pages/NewsListing";
import NewsRegister from "./pages/NewsRegister";

const router = createBrowserRouter([
    {
        path: '/',
        element: <NewsListing />
    },
    {
        path: '/noticias',
        element: <Navigate to="/" replace />
    },
    {
        path: '/cadastro-noticias',
        element: <NewsRegister />
    }
])

export default router;
