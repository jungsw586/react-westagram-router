import React, {Component} from 'react';
import Article from './Feeds/Article';
import MyProfile from './MainRighit/MyProfile';
import Story from './MainRighit/Story';
import Recommand from './MainRighit/Recommand';

class MainArea extends Component {
    render() {
        return (
            <div className="main">
                <div className="main-container">

                    <div className="feeds">
                        <Article />
                    </div>

                    <div className="main-right-container">

                        <MyProfile />

                        <Story />

                        <Recommand />

                    </div>
                
                </div>            
            </div>
        );
    }
}

export default MainArea