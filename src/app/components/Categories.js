import { Button } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router'

export default function Categories() {
    let history = useHistory();
    return (
        <div>
            <Button onClick={() => history.push('/escritorios')}></Button>
            <Button onClick={() => history.push('/sillas')}></Button>
            <Button onClick={() => history.push('/sillones')}></Button>
            <Button onClick={() => history.push('/accesorios')}></Button>
        </div>
    )
}
