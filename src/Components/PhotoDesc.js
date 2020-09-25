import React, { Component } from 'react';
import CardButton from './CardButton'
import {Card,Button,CardHeader,CardBody} from 'reactstrap'

const PhotoDesc = (props) =>{
    console.log(props)
    const {desc,author,changeDate} = props;
    return(
        <div className="image-content-container">
            <Card>
                <CardHeader>{author}</CardHeader>
                <CardBody>{desc}</CardBody>
                <CardButton changeDate={changeDate}/>
            </Card>
        </div>
    )
}
export default PhotoDesc;