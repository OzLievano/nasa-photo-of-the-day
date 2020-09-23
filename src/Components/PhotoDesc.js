import React, { Component } from 'react';
import Button from './Button'

const PhotoDesc = (props) =>{
    console.log(props)
    const {desc,author,changeDate} = props;
    return(
        <div className="description-container">
            <h2>{author}</h2>
            <p>{desc}</p>
            <Button changeDate={changeDate}/>
        </div>
    )
}
export default PhotoDesc;