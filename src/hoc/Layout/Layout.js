import React, {Component} from 'react';
import Aux from '../Auxillary/Auxillary';

import NavigationTop from '../../components/Navigation/NavigationTop/NavigationTop'
import NavigationBottom from '../../components/Navigation/NavigationBottom/NavigationBottom'

class Layout extends Component {
    render(){
       return (
        <Aux>
                <NavigationTop 
                    change={this.props.change}
                    submit={this.props.submit}/>
                <NavigationBottom />
        </Aux>
               
       );
    }
}

export default Layout;