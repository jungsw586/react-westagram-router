import React, {Component} from 'react';
import ArticleHeader from './ArticleBody/Article-Header';
import ArticleMainImage from './ArticleBody/Article-MainImage';
import ArticleContent from './ArticleBody/Article-Content';
import ArticleTwit from './ArticleBody/Article-Twit';

const articleUserData = [
    {
        username: 'jungsw586',
        articleContent: 'React is Goooooooooood!!!!!!!!!',
    },
];
const articleCommnetData = [
    {
        username: 'jsi7037',
        articleContent: 'yes',
        id: 1,
    },
    {
        username: 'leemutnam2288',
        articleContent: 'ㅇㅇ',
        id: 2,
    },
    {
        username: 'jhj3434',
        articleContent: 'me too',
        id: 3,
    },
];

class Article extends Component {
    constructor(props){
        super(props);
        this.state = {
            userData: articleUserData,
            commentData: articleCommnetData,
            comment: '',
            colorOpacity: 0.3,
        }
    }
    handlerWrite = (e) => {
        this.setState({
            comment: e.target.value,
        },()=>{
            this.setState({
                colorOpacity : this.state.comment.length !== 0 ? 1 : 0.3
            })
        })
    }

    handlerPost = (e) => {
        if(this.state.comment.length > 0){
            let _updateCommentData = this.state.commentData.concat({username: 'wework', articleContent: this.state.comment, id: this.state.commentData.length + 1,})
            this.setState({
                commentData: _updateCommentData
            },()=>{
                this.setState({
                    comment:'',
                })
            });
        } else {
            alert('Please Write Comment!')
        }
    }

    render() {
        const {
            userData,
            commentData,
            comment,
            colorOpacity,
        } = this.state;
        console.log(comment)
        console.log(commentData)

        return (
            <article className="article-1">
                <ArticleHeader />

                <ArticleMainImage />

                <ArticleContent
                    _userData={userData}
                    _commentData={commentData}
                />
                
                <ArticleTwit
                    post={this.handlerPost}
                    written={this.handlerWrite}
                    opacity={colorOpacity}
                    defaultValue={comment}
                />
            </article>
        );
    }
}

export default Article