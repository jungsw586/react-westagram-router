import React, {Component} from 'react';

class LoginBtn extends Component {
   
    render(){
        return(
            <button
            className={this.props.className}
            name={this.props.name}
            onClick={this.props.onClick}
            style={this.props.style}
            >
            {this.props.value}
            </button>
        );
    }
}

export default LoginBtn