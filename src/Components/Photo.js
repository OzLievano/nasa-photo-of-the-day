import React, { Component } from 'react';
import PhotoDesc from './PhotoDesc';


const Photo = (props) => {
    console.log(props)
    return(
        <div className="image-container">
        <img src={props.data.url} alt={props.data.date}/>
        <PhotoDesc desc = {props.data.explanation} author = {props.data.copyright}/>
        </div>
    )
}
export default Photo;