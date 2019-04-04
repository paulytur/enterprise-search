import React from 'react';
import { Image } from 'react-bootstrap';
import userImage  from '../../../assets/p.jpg';
import classes from './Image.css'

const image = (props) => (
    <div className = {classes.Image} >
         <Image src={userImage} />
    </div>

   
);

export default image;