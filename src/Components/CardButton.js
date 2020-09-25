import React, { useState, useEffect } from 'react';
import {Card,Button,CardHeader,CardBody} from 'reactstrap'

const CardButton = (props) =>{
    console.log(props)
    return(
        <Button type="success" onClick={()=> props.changeDate() }>Change the Image </Button>
    )
}

export default CardButton;