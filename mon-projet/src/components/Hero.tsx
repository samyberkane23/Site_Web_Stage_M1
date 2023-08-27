import React from 'react';
import './HeroStyles.css';

interface HeroProps {
  cName: string;
  heroImg: string;
  title: string;
  text: string;
  url: string;
  btnClass: string;
  buttonText: string;

}

const Hero: React.FC<HeroProps> = (props) => {
  return (
    <>
      <div  className={props.cName}>
        <img className="coverture" alt="HeroImg" src={props.heroImg} />


        <div className=" hero-text">
          <h1>{props.title}</h1>
          <p>{props.text}</p>
          <a href={props.url} 
            className={props.btnClass}>
            {props.buttonText}
            </a>
        </div>
      </div>
    </>
  );
}

export default Hero;
