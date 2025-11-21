
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import Home from './Pages/Home'
import { RouterProvider } from 'react-router'
import router from './Pages/Rounter'
import { UserProvider } from './components/context/UserContext'
import { CartProvider } from './components/context/CartContext'


createRoot(document.getElementById('root')).render(
<React.StrictMode>
<CartProvider>
    <UserProvider>
    <RouterProvider router={router}></RouterProvider>
</UserProvider>
</CartProvider>

</React.StrictMode>
)