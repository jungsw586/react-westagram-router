import React, {Component} from 'react';

class AricleArea extends Component {
    render(){
        return(
            <div className="article-feed-article-area">
                <a className="comment-user" href="/">{this.props.username}</a>
                <span className="comment-content">{this.props.userArticle}</span>
            </div>
        );
    }
}

export default AricleArea