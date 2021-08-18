// import styled from "styled-components";
import styled, { keyframes } from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";

export const Button = styled.button`
  color: ${({ outline }) => (outline ? " #2d383d" : "#f5f4f4")};
  font-family: Roboto;

  font-style: normal;
  font-weight: 500;
  font-size: 1.685vw;
  width: 14.667vw;
  height: 5.056vw;
  background: ${({ outline }) => (outline ? "transparent" : "#64b6ac")};
  border: 0.63vw solid #64b6ac;
  box-sizing: border-box;
  border-radius: 60vw;
  text-decoration: none;
  transition: all ease-in-out 0.2s;
  cursor: pointer;
  &:hover {
    color: ${({ outline }) => (outline ? "white" : "black")};
    background-color: ${({ outline }) => (outline ? "#64b6ac" : " #64b6f0")};
    border-color: ${({ outline }) => (outline ? "#64b6ac" : " #64b6f0")};
  }

  @media screen and (max-width: 576px) {
    width: ${({ wideBTN }) => (wideBTN ? "40vw" : "25vw")};
    height: 10vw;
    font-size: 3vw;
  }
`;

const ShakeAnimation = keyframes` 

    0% { 
      transform: translatex(0);
    }
    
    50% { 
      transform: translatex(10px);
    }
    100% { 
      transform: translatex(0px);

    }
`;
export const ArrowForward = styled(MdArrowForward)`
  animation: 0.8s ${ShakeAnimation} infinite ease-in;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)``;
