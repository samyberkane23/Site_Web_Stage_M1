import "./NeedStyles.css";
import React, { ReactNode } from "react";

interface NeedDataProps {
    text: ReactNode;
    heading: ReactNode;
    image: string | undefined;
}

const NeedData: React.FC<NeedDataProps> = (props) => {
    return (
        <div className="t-card">
            <div className="t-image">
                <img src={props.image} alt="" />
            </div>
            <h4>{props.heading}</h4>
            <p>{props.text}</p>
        </div>
    );
};

export default NeedData;

