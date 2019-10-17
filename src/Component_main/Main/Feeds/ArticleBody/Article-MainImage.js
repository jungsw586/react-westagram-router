import React, {Component} from 'react';
import FeedMainImage_IU from '../../Image_FeedMain/feedmainImage.jpg' 


class Article_MainImage extends Component {
    render(){
        return(
            <div className="article-feedMainImage-box">
                <img className="article-feedMainImage"
                src={FeedMainImage_IU} 
                alt={"FeedMainImge_IU"}
            />
            </div>
        );
    }
}

export default Article_MainImage