import React, {Component} from 'react';


import axios from '../../axios-instance.js';
// import Spinner from '../../UI/Spinner/Spinner'

import Home from '../../components/Home/Home'
import NavigationTop from '../../components/Navigation/NavigationTop/NavigationTop'
import Aux from '../../hoc/Auxillary/Auxillary'

class SearchHome extends Component { 
    state = {
        showContent: false,
        showLogo: true,
        logs: {
            eventId: null,
            peopleKey: null,
            sessionId: null,
            timeStamp: null
        }
    }

    componentWillMount(){
        const data = {
            peopleKey: '1111111',
            eventId: '1'
        }
        axios.post('logs/logEvent', null, 
        {
            headers: 
            {
                peopleKey: '1111111',
                eventId: '1'
            }
        })
        .then(response => {
            alert(response)
        })
        .catch(error => console.log(error));
    }

    changeSearchTermHander = (e) => {
        this.setState({
            searchTerm: e.target.value
        });
    }

    submitSearchTermHandler = (e) => {
        e.preventDefault();
        axios.get('searches/getvaluebysearchterm', { 
            headers: { 
                searchTerm: this.state.searchTerm
            }
        })
        .then(response => {
            this.setState({
                results: response.data.documents,
                took: response.data.took,
                count: response.data.total,
                loading: false
            });
        })
    }

    render() {
        return(
            <Aux>
                <NavigationTop 
                    show={this.state.showContent}
                />
                <Home 
                    click = {this.changeSearchTermHander}
                    change = {this.submitSearchTermHandler}
                    show={this.state.showLogo}/>
            </Aux>
        );
    }
}

export default SearchHome;  