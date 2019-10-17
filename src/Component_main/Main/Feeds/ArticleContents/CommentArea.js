import React, {Component} from 'react';
import Comment from './Comment'

class CommentArea extends Component {
    render(){
        const { Data } = this.props;
        
        return(
            <div className="article-feed-comment-area">
                {Data.map((el)=>{
                    let _comments = [];
                    _comments.push(
                    <Comment
                        key={el.id}
                        userName={el.username}
                        userComment={el.articleContent}
                    />)
                    return _comments
                })}
            </div>
        );
    }
}

export default CommentArea