import React, { Component } from "react";
import "./DestinationStyles.css";

interface DestinationDataProps {
  heading: string;
  text: string;
  img1: string; 
  img2: string;
  className: string;
}

class DestinationData extends Component<DestinationDataProps> {
  render() {
    return (
      <div className={this.props.className}>
        <div className="des-text">
          <h2>{this.props.heading}</h2>
          <p>{this.props.text}</p>
        </div>
        <div className="image">
          <img
            alt="image"
            src={this.props.img1}
          />
          <img
            alt="image"
            src={this.props.img2}
          />
        </div>
      </div>
    );
  }
}

export default DestinationData;
