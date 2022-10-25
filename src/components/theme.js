import React, { useState } from "react"
import styled from "styled-components"

import { StyledButton1, StyledButton2 } from "../components/buttons/button1";

const StyledDivLight = styled.div`
  background-color: white;
  color: black;
  border-radius: 15px;
  `;

const StyledDivDark = styled.div`
  background-color: black;
  color: white;
  border-radius: 15px;
`;

const StyledDiv = styled.div`
  margin: 25px;
`

function Theme({ children, button }) {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(current => !current);
  };

  return (
    <>
      {button===1 && <StyledButton1 onClick={handleClick}>change theme</StyledButton1>}
      {button===2 && <StyledButton2 onClick={handleClick}>change theme</StyledButton2>}
      {isActive &&
        <StyledDivDark>
          {/* <StyledButton1 onClick={handleClick}>change theme</StyledButton1> */}
          <StyledDiv id="fade">
            {children}
          </StyledDiv>
        </StyledDivDark>
      }
      {!isActive &&
        <StyledDivLight>
          {/* <StyledButton1 onClick={handleClick}>change theme</StyledButton1> */}
          <StyledDiv id="fade">
            {children}
          </StyledDiv>
        </StyledDivLight>
      }
    </>
  )
}

export default Theme