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

   

    componentWillMount(){
        axios.get('searches/getallsearches')
        .then((response)=>{
            this.setState({
                results: response.data.documents,
                took: response.data.took,
                count: response.data.total,
                loading: false
            });
        })
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
    
    
    render(){
        let contentResults = null;
        
        if (this.state.results){
            contentResults =  <ContentResults 
                                results={this.state.results} 
                                searchTerm = {this.state.searchTerm}
                                count={this.state.count}
                                took={this.state.took}/>
        }
        
       
        if(this.state.loading){
            contentResults = <Spinner/>;
        }

        return (
             <Aux>
                <Navigation 
                    change={this.changeSearchTermHander}
                    submit={this.submitSearchTermHandler} 
                    show = {this.state.showContent}/>
                {contentResults}
             </Aux>
                
        );
     }
}

export default SearchResult;