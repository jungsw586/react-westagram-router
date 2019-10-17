import React, {Component} from 'react';
// import ProfileImg_Wecode from '../../Image_Profile/wecodeprofile.jpg';
// import ProfileImg_Looper from '../../Image_Profile/looperprofile.jpg';
// import ProfileImg_ParkJH from '../../Image_Profile/parkjoohoprofile.jpg';
// import ProfileImg_RyuJY from '../../Image_Profile/ryu-profile.jpg';
import ProfileImg_Wework from '../../Image_Profile/weworkprofile.jpg';

class ShowLikeArea extends Component {
    constructor(props){
        super(props);
        this.state = {
            numOfLikes: 10,
        }
    }
    render(){
        return(
            <div className="article-feed-showLike-area">
                <span>
                    <img className="Img-radius" src={ProfileImg_Wework} alt="ProfileImg_Wework" />
                    <a href="/">wecode</a> 외 {this.state.numOfLikes}명이 좋아합니다.
                </span>
            </div>
        );
    }
}

export default ShowLikeArea