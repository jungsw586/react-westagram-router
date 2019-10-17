import React, {Component} from 'react';

class ArticleTwit extends Component {
    render(){
        return(
            <div className="article-feed-twit-area">
                <input
                    className="article-feed-twit-box"
                    name="comment"
                    type="text"
                    placeholder="댓글 달기..."
                    onChange={this.props.written}
                    value={this.props.defaultValue}
                />
                <button
                    className="article-feed-twit-btn"
                    name="postBtn"
                    onClick={this.props.post}
                    style={{opacity: this.props.opacity}}
                >
                게시
                </button>
            </div>
        );
    }
}

export default ArticleTwit