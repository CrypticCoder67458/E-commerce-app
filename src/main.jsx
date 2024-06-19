import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from './pages/HomePage.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import ErrorPage from './pages/ErrorPage.jsx'
import { CartPage } from './pages/CartPage.jsx'
import { CartProvider } from './pages/CartContext.jsx'



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
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </React.StrictMode>
);
