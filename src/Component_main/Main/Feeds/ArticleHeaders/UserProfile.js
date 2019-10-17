import React, {Component} from 'react';

class Article_Header_UserProfile extends Component {

    render(){
        return(
            <span className="feedUserProfile">
                <img className="Img-radius"
                    src={this.props.imgSrc}
                    alt={this.props.altSrc}
                />
                <a className="feedUser" href="/">
                    {this.props.userName}
                </a>
            </span>
        );
    }
}

export default Article_Header_UserProfile