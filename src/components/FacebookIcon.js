import React, { Component } from 'react';
import { FontAwesome } from "react-icons/fa";
import {FaFacebook} from "react-icons/fa"
import {FaTwitter} from "react-icons/fa"
import {IconContext} from "react-icons"

const FacebookIcon = () => {
  return (
    <IconContext.Provider value={{ style: {fontSize: '30px', color: "rgb(0, 123, 255)"}}}>
        <div>
          <FaFacebook />
        </div>
    </IconContext.Provider>
  )
}

const TwitterIcon = () => {
  return (
    <IconContext.Provider value={{ style: {fontSize: '30px', color: "rgb(0, 123, 255)"}}}>
        <div>
          <FaTwitter />
        </div>
    </IconContext.Provider>
  )
}

export default FacebookIcon;


