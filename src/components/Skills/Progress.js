/* eslint-disable no-undef */
import styled from "styled-components";

const Progress = styled.div`
  height: 10px;
  transition: 0.9s;
  animation: move 2s linear infinite;
  background-color: ${(props) => (props?.color ? color : "#dd5a92")};
  width: ${(props) => props.value}%;

`;



export default Progress;
