import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import NewsListing from "./pages/NewsListing";
import NewsRegister from "./pages/NewsRegister";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/noticias',
        element: <NewsListing />
    },
    {
        path: '/cadastro-noticias',
        element: <NewsRegister />
    }
])

export default router;