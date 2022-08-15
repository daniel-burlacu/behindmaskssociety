import React from 'react';
import styled from 'styled-components';
import blockchainGif from '../../assets/gifs/blockchain.gif'

const Research = () => {
  return (
    <Section id="research">
      <div className="research">
       <h1>In progress</h1>
       </div>
    </Section>
  )
}

const Section = styled.section`
position: relative;
background: url(${blockchainGif}) no-repeat center center/cover;
height:1200px;
.research {
  h1 {
    font-size: 8rem;
    color:var(--secondary-color);
    text-align: center;
    padding-top:100px;
  }
}

@media screen and (min-width: 280px) and (max-width: 1080px) {
  height:900px;
.research {
  h1 {
    font-size: 2rem;
    color:var(--secondary-color);
    text-align: center;
    padding-top:100px;
  }
}
}
`

export default Research