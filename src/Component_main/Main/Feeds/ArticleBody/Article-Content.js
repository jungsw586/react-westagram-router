import React, {Component} from 'react';
import InteractiveArea from '../ArticleContents/InteractiveArea';
import ShowLikeArea from '../ArticleContents/ShowLikeArea';
import ArticleArea from '../ArticleContents/ArticleArea';
import CommentArea from '../ArticleContents/CommentArea';

class ArticleContent extends Component {
    
    render(){
        const {
            _userData,
            _commentData
        } = this.props;

        return(
            <div className="article-feedcontent-box">
                <InteractiveArea />
    
                <ShowLikeArea />
    
                <ArticleArea
                    username={_userData[0].username}
                    userArticle={_userData[0].articleContent}
                />
    
                <CommentArea Data={_commentData}/>
            </div>
        );
    }
}

export default ArticleContent