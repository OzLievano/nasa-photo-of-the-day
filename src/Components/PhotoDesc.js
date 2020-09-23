import React, { Component } from 'react';
// import Button from './Button'

const PhotoDesc = (props) =>{
    console.log(props)
    const {desc,author,date} = props;
    return(
        <div className="description-container">
            <h2>{author}</h2>
            <p>{desc}</p>
            {/* <Button date={date}/> */}
        </div>
    )
}
export default PhotoDesc;