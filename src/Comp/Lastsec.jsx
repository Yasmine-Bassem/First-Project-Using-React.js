import React from 'react';
import "./lastsec.css";
import Btn from "./Btn";

import imgg from "../Assest/img/regg.jpg"


export default function Section(props) {
  return (
    <>
    <div className="con">
      <h1>My Projects</h1>
      
      <div className="inner">
      <div className='card'>
        <div className="photo"><img src={imgg}alt="" srcset="" /></div>
        <div><p>Creating a learning Website</p></div>
        <Btn/>
      </div>
      <div className='card'>
        <div className="photo"><img src={imgg} alt="" srcset="" /></div>
        <div><p>Creating a learning Website</p></div>
        <Btn/>
      </div>
      <div className='card'>
        <div className="photo"><img src={imgg} alt="" srcset="" /></div>
        <div><p>Creating a learning Website</p></div>
        <Btn/>
      </div>
      </div>
      </div>
    </>
  );
}
