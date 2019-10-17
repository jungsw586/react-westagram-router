import React, {Component} from 'react';

class NavInputArea extends Component {
    render() {
        return (
            <div className="nav-input-area">
                <input className="nav-input-Box" type="text" />
                <div className="filteredBox"></div>
            </div>        
        );
    }
}

export default NavInputArea