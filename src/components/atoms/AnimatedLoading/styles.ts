import styled, { keyframes } from 'styled-components'

const leftToRight = keyframes`
  0%, 100% {
    transform: translate(0, 0);
  }
  
  50% {
    transform: translate(110px, 0);
  }
`

const rightToLeft = keyframes`
  0%, 100% {
    transform: translate(0, 0);
  }
  
  50% {
    transform: translate(-110px, 0);
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  height: 40px;
  width: 150px;
  margin-bottom: ${({ theme }) => theme.spacing(2)}px;
`

export const FirstCircle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 40px;
  width: 40px;
  background-color: ${({ theme }) => theme.colors.gray1};
  animation: ${leftToRight} 1.5s linear infinite;
  border-radius: 100%;
`

export const SecondCircle = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 40px;
  width: 40px;
  background-color: ${({ theme }) => theme.colors.gray3};
  animation: ${rightToLeft} 1.5s linear infinite;
  border-radius: 100%;
`
