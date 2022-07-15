/* eslint-disable no-undef */
import styled from "styled-components";

export const ProgressStyle = styled.div`
  height: 10px;
  transition: width 0.6s ease;
  animation: move 2s linear infinite;
  width: ${(props) => props?.value}%;
  background-color: ${(props) => (props?.color ? color : "#dd5a92")};
  background-image: linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.15) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.15) 50%,
    rgba(255, 255, 255, 0.15) 75%,
    transparent 75%,
    transparent
  );
  background-size: 1rem 1rem;
`;

export const ProgressBarStyle = styled.div`
  background: #fbeaf1;
`;

// export { ProgressBarStyle, ProgressStyle };
