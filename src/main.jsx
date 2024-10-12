import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from './pages/HomePage.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import ErrorPage from './pages/ErrorPage.jsx'
import { CartPage } from './pages/CartPage.jsx'
import { ProductPage } from './pages/ProductPage.jsx'
import { ContextProvider } from './Context/ContextProvider.jsx'
import { ProductsPage } from './pages/ProductsPage.jsx'



const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage />
  },
  {
    path: '/cart',
    element: <CartPage />,
    errorElement: <ErrorPage />
  },
  {
    path: '/products/product/:productId',
    element: <ProductPage />
  },
  {
    path:'/products/:category',
    element: <ProductsPage/>
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  </React.StrictMode>
);
