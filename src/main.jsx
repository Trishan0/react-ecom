import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router'
import NavBar from './Components/NavBar/NavBar.jsx'
import { CartProvider } from './context/CartContext.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <CartProvider>
      <ThemeProvider>
        <NavBar></NavBar>
        <App />
      </ThemeProvider>
    </CartProvider>
  </BrowserRouter>,
)
