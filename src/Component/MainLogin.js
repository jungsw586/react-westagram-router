import React, { Component } from 'react';
import InstagramLogo from '../img/logo_text.png';
import BarArea from './BarArea';
import FaceBookLoginArea from './FaceBookLoginArea';

class MainLogin extends Component {
    
    handlerOnChanged = (e) => {
        console.log('onchange worked!');
        if(e.target.form[0].value.length !== 0 && e.target.form[1].value.length !== 0){
            e.target.form[2].style.opacity = "1"
        } else {
            e.target.form[2].style.opacity = "0.3"
        }
    }
    handlerOnClicked = (e) => {
        let idInput = e.target.form[0];
        let pwInput = e.target.form[1];
        if(idInput.value.length !== 0 && pwInput.value.length !== 0){
            alert('로그인 성공!')
        } else {
            alert('아이디 혹은 비밀번호를 입력해주세요!')
        }
    }
    render() {
                    
        return(
            <form className="mainLogin containerBox" onChange={this.handlerOnChanged}>
                <img className="logoImage" src={InstagramLogo} alt={'Instagrma Logo'}/>
                <input className="IDinput" name="IDinput" type={"text"} placeholder="전화번호, 사용자 이름 또는 이메일" />
                <input className="PWinput" name="PWinput" type={"password"} placeholder="비밀번호" />
                <button className="loginBtn" name="LoginBtn" onClick={this.handlerOnClicked}>로그인</button>
                <BarArea />
                <FaceBookLoginArea />
                <div className="facebookLogintextLine2"><a href={"https://www.instagram.com/accounts/password/reset/"}>비밀번호를 잊으셨나요?</a></div>
            </form>
        );
    }

}

export default MainLogin