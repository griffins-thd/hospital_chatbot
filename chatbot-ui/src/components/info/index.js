import React from "react";
import styled from "styled-components";
import Animation from "../animation";


const InfoWrap = styled.div`
    position: absolute;
    top: 2vw;
    right: 2vw;
    bottom: 2vw;
    left: 2vw;
    z-index: 1;
    background-color: #000044;
    border-radius: 10px; 
    text-align: center;
    opacity: 0.8;
    color: white;
    
`

const Info = () => {
  return (
    <InfoWrap>
      <h1>INTERNET TECHNOLOGIES</h1>
      <h3>HOSPITAL APPOINTMENT CHATBOT</h3>
      <p>Team: GRIFFINS</p>
      <Animation />
    </InfoWrap>
  );
};

export default Info;


