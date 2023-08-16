import React, { Component } from "react";
import "./MissionStyles.css";

interface MissionDataProps {
  heading: string;
  text: string;
  img1: string; 
  img2: string;
  btnText: string; // Ajoutez une propriété pour le texte du bouton
  btnLink: string; // Ajoutez une propriété pour le lien du bouton
  className: string;
}

class MissionData extends Component<MissionDataProps> {
  render() {
    return (
      <div className={this.props.className}>
        <div className="des-text">
          <h2>{this.props.heading}</h2>
          <p>{this.props.text}</p>
          {/* Bouton */}
          <a href={this.props.btnLink} className="btn">{this.props.btnText}</a>
        </div>
        <div className="image">
          {/* Première image */}
          <img alt="image1" src={this.props.img1} />
          {/* Deuxième image */}
          <img alt="image2" src={this.props.img2} />
        </div>
      </div>
    );
  }
}

export default MissionData;
