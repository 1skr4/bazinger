import styled, { createGlobalStyle } from 'styled-components'

export const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Lato', sans-serif;
    list-style: none;
    text-decoration: none;
  }
  html{ 
    background: #FFF;
  }
  body {
    background: var(--bacground);
  }
  :root {
    --primary: #4BCAFF;
    --text: #414042;
    --white: #FFFFFF;
    --bacground: #FFFFFF;
  }
  html, body, #root, .App {
    height: 100%;
    scroll-behavior: smooth;
  }
`


export const Container = styled.div`
  width: 100%;
  height: ${props => props.isVh && '100vh'};
  /* border: 1px dotted #FF0000; */
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ bcolor }) => bcolor};
`

export const Content = styled.div`
  width: 1280px;
  height: ${props => props.isVh && '100vh'};
  padding: 40px 0px;
  display: flex;
  flex-direction: ${({ direction }) => direction || 'row'};
  align-items: ${({ align }) => align || 'flex-start'};
  justify-content: ${({ justify }) => justify || 'flex-start'};
  flex-wrap: ${({ flexWrap }) => flexWrap || 'wrap'};
  /* border: 1px dotted green; */
  z-index: ${props => props.zIndex};
  @media (max-width: 1280px) {
    width: calc(270px + (1280 - 270) * ((100vw - 320px) / (1280 - 320)));
  }
`