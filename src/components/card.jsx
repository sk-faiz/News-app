import React, { Component } from 'react'

export default class Card extends Component {
    
    render() {
        let {source,title, description, newsImg, newsURL, author, published} = this.props;
        return (
            <div className="container my-4">
                <div className="card" >
                <span class="badge bg-danger">{source}</span>
                <img src={newsImg} style={{height: "120px"}}className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text">by {author}</p>
                    <p className="card-text">on {new Date(published).toLocaleDateString()}</p>
                    <a href={newsURL} rel="noreferrer" target="_blank" className="btn btn-outline-dark">Read more..</a>
                </div>
                </div>
            </div>
        )
    }
}
