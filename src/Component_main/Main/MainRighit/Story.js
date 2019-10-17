import React, {Component} from 'react';
import MainRightHeader from './MainRightHeader';
import StoryList from './StoryList/StoryList';
import ProfileImgWework from '../Image_Profile/weworkprofile.jpg';
import ProfileImgLooper from '../Image_Profile/looperprofile.jpg';
import ProfileImgParkJH from '../Image_Profile/parkjoohoprofile.jpg';
import ProfileImgRyuJY from '../Image_Profile/ryu-profile.jpg';

const storyList =[
    {user: 'wework', imgSrc: ProfileImgWework, timeHistory: 10},
    {user: 'looper', imgSrc: ProfileImgLooper, timeHistory: 10},
    {user: 'parkjooho', imgSrc: ProfileImgParkJH, timeHistory: 10},
    {user: 'ryujoonryul', imgSrc: ProfileImgRyuJY, timeHistory: 10},
]

class Story extends Component {
    render(){
        return(
            <div className="main-right-story">
                <MainRightHeader title={"스토리"} />

                <div className="main-right-story-content-area">
                    {storyList.map((el,id)=>{
                        let _storyLists = [];
                        _storyLists.push(
                            <StoryList
                                key={id}
                                username={el.user}
                                imgSrc={el.imgSrc}
                                history={el.timeHistory}
                            />
                        )
                        return _storyLists
                    })}
                </div>
            </div>
        );
    }
}

export default Story