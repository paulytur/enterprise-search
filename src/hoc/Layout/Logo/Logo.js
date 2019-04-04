import React from 'react';
import searchLogo from '../../../assets/logo.png';
import { Navbar } from 'react-bootstrap';
import classes from './Logo.css'

const logo = (props) => (
    <div className = {classes.Logo}>    
        <Navbar.Brand href="#home" >
            <img
                src={searchLogo}
                alt="React Bootstrap logo"
            />
        </Navbar.Brand>
    </div>
    // <div className = {classes.Logo} style={{height: props.height}}>
    //     <img src = {searchLogo} alt="MyBurger" />
    // </div>
);

export default logo;