import React, { useState, useEffect } from 'react';

const Button = (props) =>{
    console.log(props)
    return(
        <button onClick={()=> props.changeDate() }>Change the Image </button>
    )
}

export default Button;