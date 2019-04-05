import React, { Component } from 'react';
import classes from './ContentResults.css';
import Aux from '../../hoc/Auxillary/Auxillary';
import moment from 'moment';

import { Col } from 'react-bootstrap';

import ContentUpper from './ContentUpper/ContentUpper';

class ContentResults extends Component {
    render(){
        let searchResults = Object.keys(this.props.results)
        .map(igKey => {
            return (
                <div className={classes.ContentResult} key={igKey}>
                    <p>
                        <a href={this.props.results[igKey].url}>
                        {this.props.results[igKey].title}
                        </a>
                        <br/>
                        <span>{this.props.results[igKey].url}</span>
                    </p>
                    <p style={{fontSize:'12px', color:'#777'}}>{moment(this.props.results[igKey].published_Date).format("MMM Do YY")} - </p>
                    
                </div>
            );
        });

        if(this.props.count === 0){
            console.log(this.props.count);
            console.log(this.props.searchTerm);
            searchResults = (
                <Col sm={6} md={6}>
                    <div className={classes.ZeroResult}>
                        <p>Your search - <b> {this.props.searchTerm}</b> - did not match any documents.</p>
                        <p> Suggestions:  </p>
                            <ul>
                                <li>Make sure that all words are spelled correctly.</li>
                                <li>Try different keywords.</li>
                                <li>Try more general keywords.</li>
                                <li>Try fewer keywords.</li>
                            </ul>
                    </div>
                </Col>
                
            )
        }

        return (
            <Aux>
                <ContentUpper took={this.props.took} count={this.props.count} />
                {searchResults}
            </Aux>
        );
    }

   
}

export default ContentResults;