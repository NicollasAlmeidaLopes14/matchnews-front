import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import NewsRegister from "./pages/NewsRegister";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/cadastro-noticias',
        element: <NewsRegister />
    }
])

export default router;