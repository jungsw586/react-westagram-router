import React, {Component} from 'react';
import InstagramHeartLogo from '../../Image_Logo/instagram-heart.png';
import InstagramCommentLogo from '../../Image_Logo/instagram-comment-icon.png';
import InstagramShareLogo from '../../Image_Logo/instagram-share-icon.png';
import InstagramBookmarkLogo from '../../Image_Logo/instagram-bookmark.png';


class InteractiveArea extends Component {
    render(){
        return(
            <div className="article-feed-Interactive-area">
                <div className="article-feed-Interactive-box-1">
                    <img src={InstagramHeartLogo} alt={"InstagramHeartLogo"} />
                    <img src={InstagramCommentLogo} alt={"InstagramCommentLogo"} />
                    <img src={InstagramShareLogo} alt={"InstagramShareLogo"} />
                </div>
                <div className="article-feed-Interactive-box-2">
                    <img src={InstagramBookmarkLogo} alt={"InstagramBookmarkLogo"} />
                </div>
            </div>
        );
    }
}

export default InteractiveArea