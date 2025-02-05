import React from 'react';
import "./sectionbar.css";
import Btn from "./Btn";

export default function Section(props) {
  return (
    <>
      <div className="containerr">
        <div className="contentt">
          <h1>{props.title}</h1>
          <p>{props.description}</p>
          <Btn/>
        </div>
        
      </div>
    </>
  );
}
