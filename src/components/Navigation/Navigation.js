import React from 'react';
import Aux from '../../hoc/Auxillary/Auxillary'
import NavigationBottom from './NavigationBottom/NavigationBottom';
import NavigationTop from './NavigationTop/NavigationTop';

const navigation = ( props ) => (
    <Aux>
        <NavigationTop 
            change={props.change}
            submit={props.submit}/>
        <NavigationBottom />
    </Aux>
    
);

export default navigation;

   
