import React from 'react'
import {useParams } from 'react-router-dom'

export default function ItemDetail() {
    const {itemId} = useParams()
    return (
        <div>
            El ID que viene es el {itemId}
            
        </div>
    )
}
