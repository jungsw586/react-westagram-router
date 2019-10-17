import React, {Component} from 'react';

import InstagramExploreLogo from '../../Component_main/Main/Image_Logo/instagram-explore.png'
import InstagramHeartLogo from '../../Component_main/Main/Image_Logo/instagram-heart.png'
import InstagramProfileLogo from '../../Component_main/Main/Image_Logo/instagram-profile.png'

class NavSetArea extends Component {
    render() {
        return (
            <div className="nav-set-area">
                <img alt="logo" src={InstagramExploreLogo} />
                <img alt="logo" src={InstagramHeartLogo} />
                <img alt="logo" src={InstagramProfileLogo} />
            </div>
        );
    }
}

export default NavSetArea