import React, { Component } from 'react';
import PhotoDesc from './PhotoDesc';


const Photo = (props) => {
    console.log(props)
    return(
        <div className="image-content-container">
            <div className="image">
                <img src={props.data.url} alt={props.data.date}/>
            </div>
            <div className = "description">
        <PhotoDesc desc = {props.data.explanation} author = {props.data.copyright} date={props.data.date} changeDate = {props.changeDate}/>
        </div>
        </div>
    )
}
export default Photo;