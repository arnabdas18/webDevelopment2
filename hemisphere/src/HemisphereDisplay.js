import React from "react";
import "./hemisphere.css";
import northernPic from "./images/Northern-Hemisphere.png"
import southernPic from "./images/Southern-Hemisphere.jpg"

const hemisphereConfig = {
    Northern: {
        text: 'It is Northern Hemisphere',
        pic: northernPic
    },
    Southern: {
        text: 'It is Southern Hemisphere',
        pic: southernPic
    }
}

const HemisphereDisplay = ({latitude}) => {

    const hemisphere = latitude > 0 ? 'Northern' : 'Southern';
    const {text, pic} = hemisphereConfig[hemisphere];
    return(
        <div className={hemisphere}>
            <div className="ui raised text container segment">
                <div className="image">
                    <img src={pic} alt="hemisphere" />
                </div>
                <div className="ui teal bottom attached label">
                    <h1>{text}</h1>
                </div>
            </div>
        </div>
    );
}

export default HemisphereDisplay;