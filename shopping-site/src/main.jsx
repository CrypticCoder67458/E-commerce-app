import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import { Cart } from './pages/Cart.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import { Shop } from './pages/Shop.jsx'


const router=createBrowserRouter([
  {
  path:'/',
  element:<App/>,
  errorElement:<ErrorPage/>
  },
  {
  path:'/cart',
  element:<Cart/>,
  },
  {
    path:'/shop',
    element:<Shop/>,
    }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
