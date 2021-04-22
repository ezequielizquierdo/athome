import React from 'react'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import './CartWidget.css'


export default function CartWidget() {
    return (
        <div className='cart_icon_container'>
            <ShoppingCartIcon className='cart_icon'/>
        </div>
    )
}
