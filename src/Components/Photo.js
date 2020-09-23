import React, { Component } from 'react';
import PhotoDesc from './PhotoDesc';


const Photo = (props) => {
    console.log(props)
    return(
        <div className="image-content-container">
            <div className="image">
                <img src={props.data.url} alt={props.data.date}/>
            </div>
        <PhotoDesc desc = {props.data.explanation} author = {props.data.copyright}/>
        </div>
    )
}
export default Photo;