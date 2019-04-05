import React from 'react';
import Logo from '../../../hoc/Layout/Logo/Logo';
import Image from '../../../hoc/Layout/Image/Image';
import classes from './NavigationTop.css';
import { Navbar, FormControl, Form, Row, Col } from 'react-bootstrap';

const navigationTop = ( props ) => (
    <Row >
        <div className={classes.NavigationTop}>
            <Row>
                <Navbar sticky="top">
                    <Col sm={12} md={1}>
                        <Logo 
                        width='91px' 
                        height='30px'/>
                    </Col>
                    <Col sm={12} md={10}>
                        <Form inline>
                            <FormControl type="text" />
                        </Form>
                    </Col>
                    <Col sm={12} md={1}>
                        <Image />
                    </Col>
                </Navbar>
            </Row>
        </div>
    </Row>
);

export default navigationTop;
