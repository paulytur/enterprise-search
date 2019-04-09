import React from 'react';
import searchLogo from '../../../assets/logo.png';
import { Navbar } from 'react-bootstrap';
import classes from './Logo.css'

const display = {
    display: 'none'
}

const logo = ( props ) => (
    <div className = {classes.Logo} style={props.show ? null : display}>    
        <Navbar.Brand href="#home" >
            <img
                src={searchLogo}
                alt="Search"
                width={props.width}
                height={props.height}
            />
        </Navbar.Brand>
    </div>
);

export default logo;