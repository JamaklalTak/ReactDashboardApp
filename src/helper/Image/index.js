import React, { Component } from 'react';

class Image extends Component {
    render(){
        const { src, alt, className, id, handleImageClick } = this.props;
        return(
            <img 
                src={src}
                alt={alt}
                className={className}
                id={id}
                onClick={handleImageClick}
                />
        );
    }
}

export default Image;