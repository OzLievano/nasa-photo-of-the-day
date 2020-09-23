import React, { Component } from 'react';

const PhotoDesc = (props) =>{
    console.log(props)
    const {desc,author} = props;
    return(
        <div className="description-container">
            <h2>{author}</h2>
            <p>{desc}</p>
        </div>
    )
}
export default PhotoDesc;