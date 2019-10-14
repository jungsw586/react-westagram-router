import React, { Component } from 'react';


class SecLogin extends Component {
    render() {
        return(
            <div className="secLoginContainerBox">
                <p className="secLoginText">계정이 없으신가요?
                    <a className="joinLink" href={"https://www.instagram.com/accounts/emailsignup/"}>가입하기</a>
                </p>
            </div>
        );
    }
}

export default SecLogin