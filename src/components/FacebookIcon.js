import React, { Component } from 'react';
import { FontAwesome } from "react-icons/fa";
import {FaFacebook} from "react-icons/fa"
import {FaTwitter} from "react-icons/fa"
import {IconContext} from "react-icons"
import { MDBIcon, MDBContainer, MDBBtn } from 'mdbreact';
import '../styles/SocialButtonList.css';

const FacebookIcon = () => {
  return (
    <IconContext.Provider value={{ style: {fontSize: '20px', color: "rgb(0, 123, 255)"}}}>
        <div className="btn--facebook">
          <FaFacebook />
        </div>
    </IconContext.Provider>
  )
}


export default FacebookIcon;


