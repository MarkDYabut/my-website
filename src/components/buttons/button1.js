import styled from "styled-components"
import { keyframes } from "@emotion/core";

const glow = keyframes`
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: 400% 0;
  }
  100% {
    background-position: 0 0;
  }
`

export const StyledButton1 = styled.button`
align-self: center;
background-color: #fff;
background-image: none;
background-position: 0 90%;
background-repeat: repeat no-repeat;
background-size: 4px 3px;
border-radius: 15px 225px 255px 15px 15px 255px 225px 15px;
border-style: solid;
border-width: 2px;
box-shadow: rgba(0, 0, 0, .2) 15px 28px 25px -18px;
box-sizing: border-box;
color: #41403e;
cursor: pointer;
display: inline-block;
font-family: Neucha, sans-serif;
font-size: 1rem;
line-height: 23px;
outline: none;
padding: .75rem;
text-decoration: none;
transition: all 235ms ease-in-out;
border-bottom-left-radius: 15px 255px;
border-bottom-right-radius: 225px 15px;
border-top-left-radius: 255px 15px;
border-top-right-radius: 15px 225px;
user-select: none;
-webkit-user-select: none;
touch-action: manipulation;
}

&:hover {
box-shadow: rgba(0, 0, 0, .3) 2px 8px 8px -5px;
transform: translate3d(0, 2px, 0);
}

&:focus {
box-shadow: rgba(0, 0, 0, .3) 2px 8px 4px -6px;
`

export const StyledButton2 = styled.button`
padding: 0.6em 2em;
border: none;
outline: none;
color: rgb(255, 255, 255);
background: #111;
cursor: pointer;
position: relative;
z-index: 0;
border-radius: 10px;
user-select: none;
-webkit-user-select: none;
touch-action: manipulation;

&:before {
content: "";
background: linear-gradient(
  45deg,
  #ff0000,
  #ff7300,
  #fffb00,
  #48ff00,
  #00ffd5,
  #002bff,
  #7a00ff,
  #ff00c8,
  #ff0000
);
position: absolute;
top: -2px;
left: -2px;
background-size: 400%;
z-index: -1;
filter: blur(5px);
-webkit-filter: blur(5px);
width: calc(100% + 4px);
height: calc(100% + 4px);
animation: ${glow} 20s linear infinite;
transition: opacity 0.3s ease-in-out;
border-radius: 10px;
}

&:after {
z-index: -1;
content: "";
position: absolute;
width: 100%;
height: 100%;
background: #222;
left: 0;
top: 0;
border-radius: 10px;
}
`