import React, {Component} from 'react';
import Aux from '../../hoc/Auxillary/Auxillary';

import NavigationTop from './NavigationTop/NavigationTop'
import NavigationBottom from './NavigationBottom/NavigationBottom'

class Navigation extends Component {
    render(){
       return (
        <Aux>
                <NavigationTop 
                    change={this.props.change}
                    submit={this.props.submit}
                    show={this.props.show}/>
                <NavigationBottom />
        </Aux>
               
       );
    }
}

export default Navigation;