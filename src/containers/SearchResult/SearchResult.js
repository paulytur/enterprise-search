import React, { Component } from 'react';
import Aux from '../../hoc/Auxillary/Auxillary';

import Navigation from '../../components/Navigation/Navigation';
import ContentResults from '../../components/ContentResults/ContentResults';

import axios from '../../axios-instance.js';

import Spinner from '../../UI/Spinner/Spinner'

class SearchResult extends Component {
    state = {
        searchTerm: null,
        results: null,
        took: null,
        count: null,
        loading: true,
        showContent: true        
    };

    componentWillUnmount(){
        axios.post('logs/logEvent', null, 
        {
            headers: 
            {
                peopleKey: '1111111',
                eventId: '4'
            }
        })
        .then(response => {
            this.props.history.push({
                pathname: '/',
            })

            return response.data;
        })
        .catch(error => console.log(error));
    }

    componentDidMount(){
        const query = new URLSearchParams(this.props.location.search);
        let searchTerm = "";

        for(let param of query.entries()){
            searchTerm = param[1]
        }

        if(searchTerm === "") {
            this.props.history.push({
                pathname: '/'
            })
        }

        this.setState({
            searchTerm: searchTerm
        });

        axios.get('searches/getvaluebysearchterm', { 
            headers: { 
                searchTerm: searchTerm
            }
        })
        .then(response => {
            this.setState({
                results: response.data.documents,
                took: response.data.took,
                count: response.data.total,
                loading: false,
            });
        });
        
        
        axios.post('logs/logEvent', null, 
        {
            headers: 
            {
                peopleKey: '1111111',
                eventId: '2'
            }
        })
        .then(response => {
            return response.data;
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
            
            const queryParams = [];
            queryParams.push(encodeURIComponent('searchTerm') + '=' + encodeURIComponent(this.state.searchTerm))
            const queryString = queryParams.join('&')

            this.props.history.push({
                search: '?' + queryString
            })
        })
    }
    
    clickLogoHandler = () => {
        this.props.history.push({
            pathname: '/',
        })
    }

    contentClickHandler = () =>{
        axios.post('logs/logEvent', null, 
        {
            headers: 
            {
                peopleKey: '1111111',
                eventId: '3'
            }
        })
        .then(response => {
            return response.data;
        })
    .catch(error => console.log(error));
    }

    render(){
        let contentResults = null;
        
        if (this.state.results){
            contentResults =  <ContentResults 
                                results={this.state.results} 
                                searchTerm = {this.state.searchTerm}
                                count={this.state.count}
                                took={this.state.took} 
                                click={this.contentClickHandler}/>
        }
        
       
        if(this.state.loading){
            contentResults = <Spinner/>;
        }

        return (
             <Aux>
                <Navigation 
                    change={this.changeSearchTermHander}
                    submit={this.submitSearchTermHandler} 
                    show = {this.state.showContent}
                    click= {this.clickLogoHandler}
                    value= {this.state.searchTerm}
                />
                {contentResults}
             </Aux>
                
        );
     }
}

export default SearchResult;