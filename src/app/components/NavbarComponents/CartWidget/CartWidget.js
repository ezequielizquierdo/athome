import React from 'react'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import './CartWidget.css'
import { useHistory } from 'react-router';
import { Button } from '@material-ui/core';


export default function CartWidget() {
    let history = useHistory();
    return (
        <div className='cart_icon_container'>
            <Button
            onClick={() => history.push('/cart')} >
            <ShoppingCartIcon className='cart_icon'/>
            </Button>
        </div>
    )
}
