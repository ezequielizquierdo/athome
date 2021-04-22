import React from 'react'
import CartWidget from '../../components/Navbar/CartWidget/CartWidget'
import Logo from '../../components/Navbar/Logo/Logo'
import './Navbar.css'

export default function Navbar() {
    return (
        <div className='navbar_container'>
           <Logo/>
           <CartWidget/>
        </div>
    )
}