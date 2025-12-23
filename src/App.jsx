import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './Components/Pages/Home/Home'
import Product from './Components/Pages/Product/Product'
import Cart from './Components/Pages/Cart/Cart'
import About from './Components/Pages/About/About'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}

export default App
