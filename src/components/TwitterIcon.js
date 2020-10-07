import React, { Component } from 'react';
import {FaTwitter} from "react-icons/fa"
import {IconContext} from "react-icons"
import '../styles/SocialButtonList.css';



const TwitterIcon = () => {
  return (
    <IconContext.Provider value={{ style: {fontSize: '30px', color: "rgb(0, 123, 255)"}}}>
        <div className="btn--twitter">
          <FaTwitter />
        </div>
    </IconContext.Provider>
  )
}

export default TwitterIcon;