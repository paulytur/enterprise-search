import React from 'react';
import classes from './NavigationBottom.css';
import { Col } from 'react-bootstrap';

import NavigationItem from './NavigationItem/NavigationItem'


const navigationBottom = ( props ) => (
        <div className={classes.NavigationBottom}>
            <Col sm={12} md={1}>
                
            </Col>
            <Col sm={12} md={10}>
                <ul>
                    <NavigationItem
                    link="/"
                    active>
                        All
                    </NavigationItem>
                    <NavigationItem
                    link="/">
                        Images
                    </NavigationItem>
                    <NavigationItem
                    link="/">
                        Videos
                    </NavigationItem>
                    <NavigationItem
                    link="/">
                        News
                    </NavigationItem>
                </ul>
                
            </Col>
        </div>
);

export default navigationBottom;
