import React, {Component} from 'react';
import MainRightHeader from './MainRightHeader';
import RecommandList from './RecommandList/RecommandList';
import ProfileImgWework from '../Image_Profile/weworkprofile.jpg';
import ProfileImgLooper from '../Image_Profile/looperprofile.jpg';
import ProfileImgParkJH from '../Image_Profile/parkjoohoprofile.jpg';
import ProfileImgRyuJY from '../Image_Profile/ryu-profile.jpg';

const recommandList =[
    {user: 'wework', imgSrc: ProfileImgWework},
    {user: 'looper', imgSrc: ProfileImgLooper},
    {user: 'parkjooho', imgSrc: ProfileImgParkJH},
    {user: 'ryujoonryul', imgSrc: ProfileImgRyuJY},
]

class Recommand extends Component {
    render(){
        return(
            <div className="main-right-recommand">
                <MainRightHeader title={"회원님을 위한 추천"}/>
                <div className="main-right-recommand-content-area">
                    {recommandList.map((el,id)=>{
                        let _recommands = []
                        _recommands.push(
                            < RecommandList
                                key={id}
                                user={el.user}
                                imgSrc={el.imgSrc}
                            />
                        )
                        return _recommands
                    })}
                </div>
            </div>
        );
    }
}

export default Recommand