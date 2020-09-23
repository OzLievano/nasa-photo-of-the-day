import React, {useState, useEffect} from "react";
import axios from 'axios';
import Header from './Components/Header';
import Photo from './Components/Photo';
import "./App.css";


//https://api.nasa.gov/planetary/apod?api_key=QyzUvZs02BbQh3tBNPWrrmy6l2a6Ik23SLjlfS1g
function App() {
  // add in a state 
  const [data,setData] = useState([])

  const effectFn = () => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=zFcVErLJ1mgJVOOnIOmd8h3ujeTS9MX7FMZ47ULi&date=2020-09-21')
    .then((r)=>{
      console.log(r.data)
      setData(r.data)
    })
  }
  useEffect(effectFn,[]);
  return (
    <div className="App">
      <Header />
      <Photo data={data}/>
    </div>
  );
}

export default App;
