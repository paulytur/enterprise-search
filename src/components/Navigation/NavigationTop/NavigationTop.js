import React from 'react';
import Logo from '../../../hoc/Layout/Logo/Logo';
import Image from '../../../hoc/Layout/Image/Image';
import classes from './NavigationTop.css';
import { Navbar, FormControl, Form, Col } from 'react-bootstrap';

const navigationTop = ( props ) => (
    <div className={classes.NavigationTop}>
        <Navbar sticky="top">
            <Col sm={12} md={1}>
                <Logo 
                width='91px' 
                height='30px'/>
            </Col>
            <Col sm={12} md={10}>
                <Form inline onSubmit={props.submit}>
                    <FormControl type="text" 
                        onChange={props.change} />
                </Form>
            </Col>
            <Col sm={12} md={1}>
                <Image />
            </Col>
        </Navbar>
    </div>
);

export default navigationTop;
