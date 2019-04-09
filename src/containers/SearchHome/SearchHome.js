import React, {Component} from 'react';

import Home from '../../components/Home/Home'
import NavigationTop from '../../components/Navigation/NavigationTop/NavigationTop'
import Aux from '../../hoc/Auxillary/Auxillary'

class SearchHome extends Component { 
    state = {
        showContent: false,
        showLogo: true
    }

    render() {
        return(
            <Aux>
                <NavigationTop 
                    submit={null}
                    show={this.state.showContent}
                />
                <Home 
                    show={this.state.showLogo}/>
            </Aux>
        );
    }
}

export default SearchHome;  