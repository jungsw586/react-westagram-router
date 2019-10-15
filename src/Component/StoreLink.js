import React, { Component } from 'react';

class StoreLink extends Component {
    render() {
        return(
            <div className={this.props.className}>
                <a href={this.props.href}>
                    <img className={this.props.imgClassName} src={this.props.imgSrc} alt={'Stor Logo'}/>
                </a>
            </div>
        );
    }
}

export default StoreLink