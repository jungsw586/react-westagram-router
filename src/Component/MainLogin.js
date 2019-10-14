import React, { Component } from 'react';
import InstagramLogo from '../img/logo_text.png';
import BarArea from './BarArea';
import FaceBookLoginArea from './FaceBookLoginArea';

class MainLogin extends Component {

    render() {
        return(
            <div className="mainLogin containerBox">
                <img className="logoImage" src={InstagramLogo} />
                <input className="IDinput" type={"text"} />
                <input className="PWinput" type={"password"} />
                <button class="loginBtn">로그인</button>
                <BarArea />
                <FaceBookLoginArea />
                <div className="facebookLogintextLine2"><a href={"https://www.instagram.com/accounts/password/reset/"}>비밀번호를 잊으셨나요?</a></div>
            </div>
        );
    }

}

export default MainLogin