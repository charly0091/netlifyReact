import React, { Fragment } from 'react';
import { Button } from '../Button/Button';
import { useState } from 'react';


export const ConditionalRendering = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    /* let handleChange = (e) => {
        console.log(e.target.value);
    } */
    let handleUserLogin = () => {
        setIsLoggedIn(!isLoggedIn);
    }


    return ( 
        <Fragment> 
            <h2 >Conditional Rendering</h2>
            {isLoggedIn ?
            <div>
                <p>Estoy logueado</p>
                <Button text="Cerrar sesión" className="btn-green" handleClick={handleUserLogin} />
            </div>  : 
            <Button text="Inicia sesión" className="btnStyled" handleClick={handleUserLogin} />}
        </Fragment>
     );
}