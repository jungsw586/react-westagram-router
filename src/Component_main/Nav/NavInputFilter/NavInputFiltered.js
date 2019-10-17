import React, { Component } from 'react'

export class NavInputFiltered extends Component {
    render() {
        const {
            searchkeywords,
            unfilteredLetter,
        } =this.props
        
        return (
            <div>
                <span>
                    {searchkeywords}
                </span>
                    {unfilteredLetter.slice(searchkeywords.length,unfilteredLetter.length)}
            </div>
        )
    }
}

export default NavInputFiltered
