import React from 'react';
import styled from 'styled-components';

function Hero() {
  
  const StyleImage = styled.img`
    'position': 'fixed',
    'top': 0, 
    'left': 0,
    'background-color': white,
    'min-width': '100%',
    'min-height': '100%' 
  `;

  return(
    <div>
      <StyleImage>
        <img src="../assets/cityScape.png"/>
      </StyleImage>
    </div>

  );
}
export default Hero;
