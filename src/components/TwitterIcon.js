import React, { Component } from 'react';
import {FaTwitter} from "react-icons/fa"
import {IconContext} from "react-icons"
import '../styles/SocialButtonList.css';



const TwitterIcon = () => {
  return (
    <IconContext.Provider value={{ style: {fontSize: '20px', color: "rgb(81, 158, 230)"}}}>
        {/* <div className="btn--twitter"> */}
          <FaTwitter />
        {/* </div> */}
    </IconContext.Provider>
  )
}

export default TwitterIcon;