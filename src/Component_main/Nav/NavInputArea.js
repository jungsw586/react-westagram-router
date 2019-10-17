import React, {Component} from 'react';
import NavInputFiltered from './NavInputFilter/NavInputFiltered'

const recommandUserName = [
    'jungsw586',
    'jungsw',
    'jsi7037',
    'jsw3434',
    'wecode',
    'wework',
    'looper',
];

class NavInputArea extends Component {
    constructor(props){
        super(props);
        this.state = {
            recommandUserNameList: recommandUserName,
            filteredUserName: [],
            searchKeyword : '',
            filterDisplay : 'none',
        }
    }

    handlerOnChanged = (e) => {
        this.setState({
            searchkeywords: e.target.value,
        },()=>{
            this.setState({
                filterDisplay: this.state.searchkeywords.length > 0 ? 'block' : 'none',
            },this.userNameFilter(this.state.searchkeywords))
            
        })
    }

    userNameFilter = (keword) => {
        let arr = []
        this.state.recommandUserNameList.map((el) => {
            if(el.startsWith(keword)){
                arr.push(el)
            }
        })
        this.setState({
            filteredUserName: arr,
        })
    }

    render() {
        const {
            filteredUserName,
            searchkeywords,
            filterDisplay,
        } = this.state
        return (
            <div className="nav-input-area">
                <input
                    className="nav-input-Box"
                    type="text"
                    onChange={this.handlerOnChanged}
                    searchkeywords={searchkeywords}
                />
                <div
                    className="filteredBox"
                    style={{display: filterDisplay}}
                >
                    {filteredUserName.map((el,id)=>{
                        let _filterdlist = []
                        _filterdlist.push(
                            <NavInputFiltered
                                key={id}
                                searchkeywords={searchkeywords}
                                unfilteredLetter={el}
                            />
                        )
                        return _filterdlist
                    })}
                </div>
            </div>        
        );
    }
}

export default NavInputArea