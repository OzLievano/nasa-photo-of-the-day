import React, {useState, useEffect} from "react";
import axios from 'axios';
import "./App.css";


//https://api.nasa.gov/planetary/apod?api_key=QyzUvZs02BbQh3tBNPWrrmy6l2a6Ik23SLjlfS1g
function App() {
  // add in a state 
  const [data,setData] = useState([])

  const effectFn = () => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=QyzUvZs02BbQh3tBNPWrrmy6l2a6Ik23SLjlfS1g')
    .then((r)=>{
      console.log(r.data)
      setData(r.data)

    })
  }
  useEffect(effectFn,[]);
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
