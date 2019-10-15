import React, { Component } from 'react';
import InstagramLogo from '../img/logo_text.png';
import BarArea from './BarArea';
import FaceBookLoginArea from './FaceBookLoginArea';

class MainLogin extends Component {
    
    handlerOnChanged = () => {
        let idInput = document.getElementsByClassName('IDinput')[0];
        let pwInput = document.getElementsByClassName('PWinput')[0];
        console.log('onchange worked!');
        if(idInput.value.length !== 0 && pwInput.value.length !== 0){
            document.getElementsByClassName("loginBtn")[0].style.opacity = "1";
        } else {
            document.getElementsByClassName("loginBtn")[0].style.opacity = "0.3";
        }
    }
    handlerOnClicked = () => {
        let idInput = document.getElementsByClassName('IDinput')[0];
        let pwInput = document.getElementsByClassName('PWinput')[0];
        if(idInput.value.length !== 0 && pwInput.value.length !== 0){
            alert('로그인 성공!')
        } else {
            alert('아이디 혹은 비밀번호를 입력해주세요!')
        }
    }
    render() {
        return(
            <div className="mainLogin containerBox">
                <img className="logoImage" src={InstagramLogo} alt={'Instagrma Logo'}/>
                <input className="IDinput" type={"text"} onChange={this.handlerOnChanged}/>
                <input className="PWinput" type={"password"} onChange={this.handlerOnChanged}/>
                <button className="loginBtn" onClick={this.handlerOnClicked}>로그인</button>
                <BarArea />
                <FaceBookLoginArea />
                <div className="facebookLogintextLine2"><a href={"https://www.instagram.com/accounts/password/reset/"}>비밀번호를 잊으셨나요?</a></div>
            </div>
        );
    }

}

export default MainLogin