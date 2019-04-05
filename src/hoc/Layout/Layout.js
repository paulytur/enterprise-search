import React, {Component} from 'react';
import Navigation from '../../components/Navigation/Navigation';
import Aux from '../Auxillary/Auxillary'

class Layout extends Component {
    render(){
       return (
            <Aux>
                <Navigation />
                {this.props.children}
            </Aux>
               
       );
    }
}

export default Layout;