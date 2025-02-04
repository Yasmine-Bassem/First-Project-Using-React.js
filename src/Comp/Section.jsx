import React from 'react';
import "./section.css";
import Btn from "./Btn";

export default function Section(props) {
  return (
    <>
      <div className="container" style={props.sectionStyle}>
        <div className="content" style={{ flex: 1}}>
          <h1>{props.title}</h1>
          <p>{props.description}</p>
          <Btn/>
        </div>
        <div className="photo" >
          <img src={props.imageUrl} alt="not found" style={{ flex: 1 }} />
        </div>
        
      </div>
    </>
  );
}
