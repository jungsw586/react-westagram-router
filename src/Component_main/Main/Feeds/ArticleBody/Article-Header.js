import React, {Component} from 'react';
import ArticleHeaderUserProfile from '../ArticleHeaders/UserProfile';
import ProfileImg_Wecode from '../../Image_Profile/wecodeprofile.jpg';
// import ProfileImg_Looper from '../../Image_Profile/looperprofile.jpg';
// import ProfileImg_ParkJH from '../../Image_Profile/parkjoohoprofile.jpg';
// import ProfileImg_RyuJY from '../../Image_Profile/ryu-profile.jpg';
// import ProfileImg_Wework from '../../Image_Profile/weworkprofile.jpg';

class ArticleHeader extends Component {
    constructor(props){
        super(props);
        this.state = {
            username : 'jungsw586',
        }
    }
    render(){
        return(
            <div className="article-header">
                <ArticleHeaderUserProfile
                    imgSrc={ProfileImg_Wecode}
                    userName={this.state.username}
                    altSrc={"img"}
                />
                <button className="more-btn">MORE</button>
            </div>
        );
    }
}

export default ArticleHeader