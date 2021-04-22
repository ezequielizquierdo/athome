import React from 'react'
import CartWidget from '../../components/Navbar/CartWidget/CartWidget'
import Logo from '../../components/Navbar/Logo/Logo'

export default function Navbar() {
    return (
        <div className='navbar'>
           <Logo/>
           <CartWidget/>
        </div>
    )
}