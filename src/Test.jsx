import React from "react";
import './Test.css';

function Test(){
    const name= 'react';
    const style= {
        backgroundColor: 'black',
        color: 'aqua',
        fontsize: 24,
        padding: '1rem'
    }
    return(
        <>
         <div style={style}>{name}</div>
         <div className="gray-box"></div>
        </>
    );
}

export default Test;