import styled, { css } from "styled-components";
export const Button = styled.button`
  width: 300px;
  height: 60px;
  cursor: pointer;
  border-radius: 32px;
  border: 2px solid #36c9c6;
  background-color: transparent;
  position: relative;
  text-align: center;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  ${({ mxAuto }) =>
    mxAuto &&
    css`
      margin-left: auto;
      margin-right: auto;
    `}
  ${({ small }) =>
    small &&
    css`
      width: 100px;
      height: 25px;
    `}
  &:before {
    position: absolute;
    content: "";
    width: 40px;
    height: 100%;
    background-color: red;
    top: 0px;
    right: 0px;
    border-radius: 32px;
    opacity: 0;
    z-index: -100;
    transition: 0.3s ease-in-out;
  }
  &:after {
    position: absolute;
    content: "";
    width: 40px;
    height: 100%;
    background-color: blue;
    top: 0px;
    left: 0px;
    z-index: -100;
    border-radius: 32px;
    opacity: 0;
    transition: 0.3s ease-in-out;
  }
  &:hover {
    &:after {
      opacity: 0.4;
      width: 100%;
    }
    &:before {
      opacity: 0.4;
      width: 100%;
    }
  }
`;
