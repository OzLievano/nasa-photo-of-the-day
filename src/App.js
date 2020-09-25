import React, {useState, useEffect} from "react";
import axios from 'axios';
import Header from './Components/Header';
import Photo from './Components/Photo';
import Grid from './Components/Grid';
import DatePicker from 'react-datepicker'
import {format, compareAsc} from 'date-fns';
import "react-datepicker/dist/react-datepicker.css";
import "./App.css";


//https://api.nasa.gov/planetary/apod?api_key=QyzUvZs02BbQh3tBNPWrrmy6l2a6Ik23SLjlfS1g
function App() {
  // add in a state 
  const [data,setData] = useState([])
  const [date,setDate] = useState('2020-09-21');
  const [startDate, setStartDate] = useState(new Date());

  const changeDate = () => {
    setDate('2020-09-21');
  }

  const Calendar = () => {
    return (
      <DatePicker selected={startDate} onChange=
      {
        date => {
        setDate(format(date,'yyyy-MM-dd'))
        setStartDate(date)
        }
      }/>

    );
  };
  
  const effectFn = () => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=zFcVErLJ1mgJVOOnIOmd8h3ujeTS9MX7FMZ47ULi&date=${date}`)
    .then((r)=>{
      console.log(r.data)
      setData(r.data)
    })
  }
  useEffect(effectFn,[date]);
  return (
    <div className="App">
      <Header />
      <Calendar />
      <Photo data={data} changeDate={changeDate}/> 
    </div>
  );
}

export default App;
