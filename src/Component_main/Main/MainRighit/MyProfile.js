import React, {Component} from 'react';
// import ProfileImgWework from '../Image_Profile/weworkprofile.jpg';
// import ProfileImg_Looper from '../Image_Profile/looperprofile.jpg';
import ProfileImg_ParkJH from '../Image_Profile/parkjoohoprofile.jpg';
// import ProfileImg_RyuJY from '../Image_Profile/ryu-profile.jpg';
// import ProfileImg_Wework from '../Image_Profile/weworkprofile.jpg';

class MyProfile extends Component {
    render(){
        return(
            <div className="main-right-myprofile">
                <img className="Img-radius" src={ProfileImg_ParkJH} alt={"ProfileImgWework"}/>
                <div className="main-right-myprofile-describtion">
                <div><a href="/">parkjooho</a></div>
                <span className="main-right-myprofile-describtion-textborder">박주호</span>
                </div>
            </div>
        );
    }
}

export default MyProfile