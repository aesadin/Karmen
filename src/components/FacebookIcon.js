import React, { Component } from 'react';
import { FontAwesome } from "react-icons/fa";
import {FaFacebook} from "react-icons/fa"
import {FaTwitter} from "react-icons/fa"
import {IconContext} from "react-icons"
import '../styles/SocialButtonList.css';

const FacebookIcon = () => {
  return (
    <IconContext.Provider value={{ style: {fontSize: '30px', color: "rgb(0, 123, 255)"}}}>
        <div className="btn--facebook">
          <FaFacebook />
        </div>
    </IconContext.Provider>
  )
}


export default FacebookIcon;


