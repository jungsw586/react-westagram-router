import React, { Component } from 'react';
import FaceBookLogo from '../img/facebookLogo.png'

class FaceBookLoginArea extends Component {
    render() {
        return (
            <div className="facebookLoginBox">
                <span className="facebookLogin">
                    <a href={"https://www.facebook.com/login.php?skip_api_login=1&api_key=124024574287414&kid_directed_site=0&app_id=124024574287414&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Foauth%3Fclient_id%3D124024574287414%26redirect_uri%3Dhttps%253A%252F%252Fwww.instagram.com%252Faccounts%252Fsignup%252F%26state%3D%257B%2522fbLoginKey%2522%253A%25221a1huv1ipj7vl11x8qlriio9cs1m8mz8xejajx15fn5fwpbrqvp%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252F%2522%257D%26scope%3Demail%26response_type%3Dcode%252Cgranted_scopes%26locale%3Dko_KR%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3D13164b34-fb42-4a5b-95bb-3d1c620fb2c3&cancel_url=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fsignup%2F%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3D%257B%2522fbLoginKey%2522%253A%25221a1huv1ipj7vl11x8qlriio9cs1m8mz8xejajx15fn5fwpbrqvp%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252F%2522%257D%23_%3D_&display=page&locale=ko_KR"}>
                        <span><img className="facebookLogo" src={FaceBookLogo} alt={"FaceBookLogo"}/></span>
                        <span className="facebookLogintextLine1">Facebook으로 로그인</span>
                    </a>
                </span>
            </div>
        );
    }
}

export default FaceBookLoginArea