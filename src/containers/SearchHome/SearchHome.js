import React, {Component} from 'react';


import axios from '../../axios-instance.js';
// import Spinner from '../../UI/Spinner/Spinner'

import Home from '../../components/Home/Home'
import NavigationTop from '../../components/Navigation/NavigationTop/NavigationTop'
import Aux from '../../hoc/Auxillary/Auxillary'

class SearchHome extends Component { 

    _isMounted = false;
    state = {
        showContent: false,
        showLogo: true,
        searchTerm: null,
        logs: {
            eventId: null,
            peopleKey: null,
            sessionId: null,
            timeStamp: null
        },
        isSuccess: false
    }

    LogEvent = () => {
        axios.post('logs/logEvent', 
            null, 
            { 
                headers: 
                { 
                    peopleKey: '1111111',
                     eventId: '1'
                }
            })
            .then(response => {
                this.setState({
                    isSuccess: response.data
                })
            })
            .catch(error => console.log(error));

    }
        
    

    componentDidMount(){
        this.LogEvent();
        
    }

    changeSearchTermHander = (e) => {
        this.setState({
            searchTerm: e.target.value
        });
    }

    submitSearchTermHandler = (e) => {
        e.preventDefault();
        const queryParams = [];
        queryParams.push(encodeURIComponent('searchTerm') + '=' + encodeURIComponent(this.state.searchTerm))
        const queryString = queryParams.join('&')
        
        if(this.state.searchTerm != null){
            this.props.history.push({
                pathname: '/results',
                search: '?' + queryString
            })
        }
    }

    render() {
        return(
            <Aux>
                <NavigationTop 
                    show={this.state.showContent}
                />
                <Home 
                    submit = {this.submitSearchTermHandler}
                    change = {this.changeSearchTermHander}
                    show = {this.state.showLogo}
                    click = {this.submitSearchTermHandler} />
            </Aux>
        );
    }
}

export default SearchHome;  