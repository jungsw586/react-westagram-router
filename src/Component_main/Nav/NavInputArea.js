import React, {Component} from 'react';

class NavInputArea extends Component {
    constructor(props){
        super(props);
        this.state = {
            searchKeyword : '',
        }
    }

    handlerOnChanged = (e) => {
        this.setState({
            searchKeyword: e.target.value,
        })
    }

    render() {
        console.log(this.state.searchKeyword)
        return (
            <div className="nav-input-area">
                <input
                    className="nav-input-Box"
                    type="text"
                    name="searchKeyword"
                    onClick={this.handlerOnChanged}
                />
                <div className="filteredBox"></div>
            </div>        
        );
    }
}

export default NavInputArea