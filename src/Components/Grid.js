import React, { Component,useState,useEffect } from 'react';
import axios from 'axios';
import {Col,Row} from 'reactstrap';
import DatePicker from 'react-datepicker'
import {format, compareAsc} from 'date-fns';
import "react-datepicker/dist/react-datepicker.css";

const Grid = 
    // const [gridData,setGridData] = useState([])
    // return (
    //         <Row>
    //             <Col>.col</Col>
    //             <Col>.col</Col>
    //             <Col>.col</Col>
    //             <Col>.col</Col>
    //         </Row>
    // )
    () => {
        const [startDate, setStartDate] = useState(new Date());
        return (
          <DatePicker selected={startDate} onChange={date => setStartDate(format(date,'yyyy-MM-dd'))}/>

        );
      };


export default Grid;