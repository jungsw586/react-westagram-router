import React, { Component } from 'react';
import InstagramLogo from '../Component_login/img/logo_text.png';
import BarArea from './BarArea';
import FaceBookLoginArea from './FaceBookLoginArea';
import LoginBtn from './LoginBtn';
import BanBtn from './BanBtn';

class MainLogin extends Component {
    constructor(props){
        super(props);
        this.state = {
            IDinput: '',
            PWinput: '',
            ColorOpacity: 0.3,
            Accessable: true,
        }
    }
    handlerOnChanged = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        },()=>{
            if(this.state.IDinput.length !== 0 && this.state.PWinput.length !== 0){
                this.setState({ColorOpacity:1, Accessable: true});
            } else if(this.state.IDinput.length !== 0 && (this.state.PWinput.length === 0)){
                this.setState({ColorOpacity:0.3 , Accessable: true,});
            } else if(this.state.IDinput.length === 0 || this.state.PWinput.length === 0){
                this.setState({ColorOpacity:1 , Accessable: false,});
            }
        });
    }

    handlerOnClicked = (e) => {
        this.state.IDinput.length !== 0 && this.state.PWinput.length !== 0 ? alert('로그인 성공!') : alert('아이디 혹은 비밀번호를 입력해주세요!')
    }

    render() {
        const {
            Accessable,
            ColorOpacity,
        } = this.state

        return(
            <form className="mainLogin containerBox" onChange={this.handlerOnChanged}>
                <img className="logoImage" src={InstagramLogo} alt={'Instagrma Logo'}/>
                <input className="IDinput" name="IDinput" type={"text"} placeholder="전화번호, 사용자 이름 또는 이메일" />
                <input className="PWinput" name="PWinput" type={"password"} placeholder="비밀번호" />
                {Accessable ? (
                    <LoginBtn
                        className="loginBtn"
                        name="LoginBtn"
                        onClick={this.handlerOnClicked}
                        style={{opacity: ColorOpacity}}
                        value="로그인"
                    />
                ) : (
                    <BanBtn
                        className="loginBtn"
                        name="LoginBtn"
                        onClick={this.handlerOnClicked}
                        style={{backgroundColor: "red", opacity: ColorOpacity}}
                        value="로그인 불가"
                    />
                )}
                {/* <button className="loginBtn" name="LoginBtn" onClick={this.handlerOnClicked} style={{opacity: Color}} >로그인</button> */}
                <BarArea />
                <FaceBookLoginArea />
                <div className="facebookLogintextLine2"><a href={"https://www.instagram.com/accounts/password/reset/"}>비밀번호를 잊으셨나요?</a></div>
            </form>
        );
    }

}

export default MainLogin