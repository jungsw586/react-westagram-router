import React, {Component} from 'react';
import Nav from '../Component_main/Nav/Nav'
import MainArea from '../Component_main/Main/MainArea'
import '../Main.css';

class Main extends Component {
    render() {
        return (
            <div id="MainArea">
                <Nav />
                <MainArea />
            </div>
        );
    }
}

export default Main