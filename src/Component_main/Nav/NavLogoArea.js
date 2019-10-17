import React, {Component} from 'react';

import InstagramLogo from '../../Component_main/Main/Image_Logo/instagram-logo.png'
import InstagramLogoText from '../../Component_main/Main/Image_Logo/logo_text.png'

class NavLogoArea extends Component {
    render() {
        return (
            <div className="nav-logo-area">
                <img className="nav-instagram-logo" alt="logo" src={InstagramLogo} />
                <span className="nav-bar1"></span>
                <img className="nav-text-logo" alt="logo" src={InstagramLogoText} />
            </div>
        );
    }
}

export default NavLogoArea