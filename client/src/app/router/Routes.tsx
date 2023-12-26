import { createBrowserRouter } from "react-router-dom";
import App from "../layout/App";
import Catalog from "../../features/catalog/Catalog";
import ProductDetails from "../../features/catalog/ProductDetails";
import AboutPage from "../../features/about/AboutPage";
import ContactPage from "../../features/contact/ContactPage";
import Preview from "../layout/Preview";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Preview />
    },
    {
        path: '',
        element: <Preview />
    },
    {
        path: '/catalog',
        element: <App />,
        children: [
            {path: '', element: <Catalog />},
            {path: ':id', element: <ProductDetails />}
        ]
    },
    {
        path: '/contacts',
        element: <App />,
        children: [
            {path: '', element: <ContactPage />}
        ]
    },
    
    /*{
        path: '/',
        element: <App />,
        children: [
            {path: '', element:<Preview />},
            {path: 'catalog', element:<Catalog />},
            {path: 'catalog/:id', element: <ProductDetails />},
            {path: 'about', element: <AboutPage />},
            {path: 'contacts', element: <ContactPage />}
        ]
    }*/
])