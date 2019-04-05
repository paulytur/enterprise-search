import React from 'react';
import { Image, Row } from 'react-bootstrap';
import userImage  from '../../../assets/p.jpg';
import classes from './Image.css'

const image = (props) => (

    <div className = {classes.Image} >
        <Row>
            <Image src={userImage} />
            {/* <p>Hi, Paul!</p> */}
        </Row>
    </div>

   
);

export default image;