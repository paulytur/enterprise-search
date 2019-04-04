import React, {Component} from 'react';
import Navigation from '../../components/Navigation/Navigation';

class Layout extends Component {
    render(){
       return (
            <div>
                <Navigation />
                {this.props.children}
            </div>
       );
    }
}

export default Layout;