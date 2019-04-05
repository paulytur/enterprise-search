import React, {Component} from 'react';
import SearchResult from '../../containers/SearchResult/SearchResult';
import Aux from '../Auxillary/Auxillary'

class Layout extends Component {
    render(){
       return (
        <Aux>
            <SearchResult />
        </Aux>
               
       );
    }
}

export default Layout;