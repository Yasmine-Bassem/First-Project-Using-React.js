import React, { Component } from "react";
import "./nav.css"
export default class Nav extends Component {
  render() {
    return (
      <>
        <nav>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
      </>
    );
  }
}
