import React, { Component,useState,useEffect } from 'react';
import axios from 'axios';
import {Col,Row} from 'reactstrap';

const Grid = props => {
    const [gridData,setGridData] = useState([])
    return (
            <Row>
                <Col>.col</Col>
                <Col>.col</Col>
                <Col>.col</Col>
                <Col>.col</Col>
            </Row>
    )
}
export default Grid;