import React from 'react'
import { NavLink } from 'react-router-dom';
import './AppHeader.css';

function AppHeader(){

    return(
        <header className="App-Header">
            <NavLink className={'header-item1'} to='' end>Home</NavLink>
            <NavLink className={'header-item1'} to='about'>About</NavLink>

            <NavLink className={'header-item2'} to='register'>Register</NavLink>
            <NavLink className={'header-item2'} to='login'>Login</NavLink>
            <NavLink className={'header-item2'} to='MultiForm'>MultiForm</NavLink>
        </header>
    );
}

export default AppHeader;