import React, { Component } from 'react'

export class StoryList extends Component {
    render() {
        return (
            <div className="main-right-story-content">
                <img className="Img-radius" src={this.props.imgSrc} alt={this.props.imgSrc} />
                <div>
                    <div><a href="/">{this.props.username}</a></div>
                    <div className="story-time">{this.props.history}분전</div>
                </div>
            </div>
        )
    }
}

export default StoryList
