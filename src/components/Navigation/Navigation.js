import React from 'react';
import Logo from '../../hoc/Layout/Logo/Logo';
import Image from '../../hoc/Layout/Image/Image';
import classes from './Navigation.css';
import { Navbar, FormControl, Form } from 'react-bootstrap';

const navigation = ( props ) => (
    // <Row >
        <div className={classes.Navigation}>
            <Navbar fixed="top" >
               <Logo />
                <Form inline>
                    <FormControl type="text" placeholder="Search" />
                </Form>
                <Image />
                <Logo />
            </Navbar>
        </div>
    // </Row>
   
);

export default navigation;
