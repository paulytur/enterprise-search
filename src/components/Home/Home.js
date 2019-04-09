import React from 'react';

import classes from './Home.css'
import Logo from '../../hoc/Layout/Logo/Logo'
import { Form, FormControl} from 'react-bootstrap';
const home = ( props ) => (
        <div >
            <div className={classes.HomeLogo}>
                <Logo
                    width='275'
                    height='92' 
                    show={props.show}/>
            </div>
            <div className={classes.HomeInput}>
                <Form inline onSubmit={props.submit}>
                    <FormControl type="text" 
                        onChange={props.change} />
                    <span> </span>
                </Form>
            </div>
        </div>
    
);

export default home;