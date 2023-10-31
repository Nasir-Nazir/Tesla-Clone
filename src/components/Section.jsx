import React from "react";
import styled from "styled-components";
import Fade from 'react-reveal/Fade';

function Section(props) {
  return (
    <Wrap bgImage={props.backgroundImg}>
      <Fade bottom>
      <ItemText>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </ItemText>
      </Fade>
      <Fade bottom>
      <Buttons>
        <ButtonGroup>
          <LeftButton>{props.leftBtnText}</LeftButton>
          { props.RightBtnText && <RightButton>{props.RightBtnText}</RightButton>}
        
        </ButtonGroup>
        <DownArrow src="/Images/down-arrow.svg" />
      </Buttons>
       </Fade>
    </Wrap>
  );
}

export default Section;
const Wrap = styled.div`
  width: 100%;

  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${(props) => `url("/Images/${props.bgImage}")`};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const ItemText = styled.div`
  text-align: center;
  padding-top: 15vh;
  z-index:-1;
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 6vh;
  @media (max-width: 768px) {
    flex-direction: column;
    margin: 10px 109px;
  }
`;
const LeftButton = styled.div`
  background-color: #e9e7e6;
  height: 40px;
  width: 220px;
  color: #464140;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  cursor: pointer;
  margin: 10px 10px;
`;
const RightButton = styled.div`
  background-color: #464140;
  height: 40px;
  width: 220px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  cursor: pointer;
  margin: 10px 10px;
`;

const DownArrow = styled.img`
  margin: 0 200px;
  height: 40px;
  cursor: pointer;
  animation: animateDown infinite 1.5s;
`;
const Buttons = styled.div``;
