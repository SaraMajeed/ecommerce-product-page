import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import { ProductCarousel } from './components/ProductCarousel'
import SideNav from './components/SideNav'
import Description from './components/Description'
import Cart from './components/Cart'
import ThumbnailCarousel from './components/ThumbnailCarousel'

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const [showCart, setShowCart] = useState(false);
  const [cart, setCart] = useState([]);

  const product = {
    id: 1,
    company: "SNEAKER COMPANY",
    name: "Fall Limited Edition Sneakers",
    price: '125.00',
    description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
    oldPrice: '250.00',
    discount: 50
  }

  const menuItems = ["Collections", "Men", "Women", "About", "Contact"]

  return (
    <>
      <SideNav 
        menuStatus = {showMenu} 
        hideMenu = {() => setShowMenu(false)}
        menuItems= {menuItems}
      />
      <Header 
        showMenu = {() => {setShowMenu(true); setShowCart(false)}}
        toggleCart = {() => {setShowCart((cur) => !cur); setShowMenu(false)}}
        menuItems = {menuItems}
        quantity = {cart.length > 0 ? cart[0].quantity : null}
        />
      <Cart 
        showCart = {showCart} 
        cart = {cart}
        deleteProduct = {(id) => setCart(cart.filter((p) => id != p.id))}
      />
      <div className='lg:flex lg:m-auto lg:mt-8 lg:justify-center items-center md:flex md:mx-12'>
        <ProductCarousel />
        <Description 
          product = {product}
          quantity = {quantity} 
          add = {() => setQuantity((prev) => prev + 1)}
          minus = {() => quantity > 0 ? setQuantity((prev) => prev - 1): setQuantity(0)}
          addToCart = {() => setCart([{
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: quantity
          }])}
        />
      </div>      
    </>
  )
}

export default App
