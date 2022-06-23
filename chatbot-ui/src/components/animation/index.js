import React from "react";
import styled from "styled-components";

const AnimationWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    ${"" /* min-height: 100vh; */}
    position: relative;
    width: 100%;
    margin-top: 150px;

    & > .ring {
        width: 150px;
        height: 150px;
        margin: -30px;
        border-radius: 50%;
        border: 4px solid transparent; 
        border-top: 4px solid #24ecff;
        animation: animate 5s linear infinite;
    }

    @keyframes animate{
        0%
        {
            transform: rotate(0deg);
        }
        100%
        {
            transform: rotate(360deg);
        }
    }

    & > .ring::before{
        content: '';
        position: absolute;
        width: 15px;
        height: 15px;
        background: #24ecff;
        top: 12px;
        right: 12px;
        border-radius: 50%;
        box-shadow: 0 0 0 5px #24ecff33,
        0 0 0 10px #24ecff22,
        0 0 0 20px #24ecff11,
        0 0 20px #24ecff,
        0 0 50px #24ecff;
    }
    
    & > .ring:nth-child(2){
        animation: animate2 5s linear infinite;
        animaion-delay: -2s;
        border-top: 4px solid transparent;
        border-left: 4px solid #93ff2d;
    }
    @keyframes animate2{
        0%
        {
            transform: rotate(360deg);
        }
        100%
        {
            transform: rotate(0deg);
        }
    }
    & > .ring:nth-child(2)::before{
        content: '';
        position: absolute;
        top: initial;
        width: 15px;
        height: 15px;
        background: #93ff2d;
        top: 12px;
        left: 12px;
        border-radius: 50%;
        box-shadow: 0 0 0 5px #93ff2d33,
        0 0 0 10px #93ff2d22,
        0 0 0 20px #93ff2d11,
        0 0 20px #93ff2d,
        0 0 50px #93ff2d;
    }

    & > .ring:nth-child(3){
        animation: animate2 5s linear infinite;
        animation-delay: -4s;
        position: absolute;
        top: -66.66px;
        border-top: 4px solid transparent;
        border-left: 4px solid #e41cf8;
    }
    & > .ring:nth-child(3)::before{
        content: '';
        position: absolute;
        top: initial;
        width: 15px;
        height: 15px;
        background: #e41cf8;
        top: 12px;
        left: 12px;
        border-radius: 50%;
        box-shadow: 0 0 0 5px #e41cf833,
        0 0 0 10px #e41cf822,
        0 0 0 20px #e41cf811,
        0 0 20px #e41cf8,
        0 0 50px #e41cf8;
    }
    & > p{
        position: absolute;
        color: white;
        font-size: 1.5em;
        bottom: -120px;
        letter-spacing: 0.15em;
    }
`;

const Animation = () => {
  return (
    <AnimationWrap>
      <div className="ring"></div>
      <div className="ring"></div>
      <div className="ring"></div>
      <p>Loading...</p>
    </AnimationWrap>
  );
};

export default Animation;
