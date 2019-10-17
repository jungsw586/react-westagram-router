import React, {Component} from 'react';
import NavLogoArea from './NavLogoArea';
import NavInputArea from './NavInputArea';
import NavSetArea from './NavSetArea';


class Nav extends Component {
    render() {
        return (
            <div className="nav">
                <div className="nav-container">
                    <NavLogoArea />
                    <NavInputArea />
                    <NavSetArea />
                </div>
            </div>
        );
    }
}

export default Nav