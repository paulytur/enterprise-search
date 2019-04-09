import React from 'react';
import Logo from '../../../hoc/Layout/Logo/Logo';
import Image from '../../../hoc/Layout/Image/Image';
import classes from './NavigationTop.css';
import { Navbar, FormControl, Form, Col } from 'react-bootstrap';


const display = {
    display: 'none'
}

const navigationTop = ( props ) => (

    <div className={classes.NavigationTop} >
        <Navbar sticky="top" >
            <Col sm={12} md={1} >
                <Logo 
                width='91px' 
                height='30px'
                show = {props.show}/>
            </Col>
            <Col sm={12} md={10}>
                <Form inline onSubmit={props.submit} style={props.show ? null : display}>
                    <FormControl type="text" 
                        onChange={props.change} />
                </Form>
            </Col>
            <Col sm={12} md={1} >
                <Image
                    show = {props.show}/>
            </Col>
        </Navbar>
    </div>
);

export default navigationTop;
