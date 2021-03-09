import styled, { keyframes } from 'styled-components'

const animate = keyframes`
    0% {
      top: 90px;
      left: 90px;
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: 0px;
      left: 0px;
      width: 180px;
      height: 180px;
      opacity: 0;
    }
`

export const Loader = styled.div`
  .lds-ripple {
    display: inline-block;
    position: relative;
    width: 180px;
    height: 180px;
  }
  .lds-ripple div {
    position: absolute;
    border: 4px solid orange;
    opacity: 1;
    border-radius: 50%;
    animation: ${animate} 1.3s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }
  .lds-ripple div:nth-child(2) {
    animation-delay: -0.5s;
  }
`