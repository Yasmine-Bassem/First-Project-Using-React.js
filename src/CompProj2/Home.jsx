import React from 'react';
import './home.css';
import './bttn.css';
import Bttn from './Bttn';

export default function Home(props) {
  return (
    <>
      <div className="containerr my-5" style={props.sectionStyle}>
        <div className="row align-items-center">
          <div className="col-md-6">
            <h1>{props.title}</h1>
            <p>{props.description}</p>
<Bttn />
          </div>
          <div className="col-md-6">
            <img src={props.imageUrl} alt="not found" className="img-fluid rounded-3" />
          </div>
        </div>
      </div>
    </>
  );
}
