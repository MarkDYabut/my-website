import { keyframes, css } from "@emotion/core";
import React, { useEffect } from "react";
import { useInView } from 'react-intersection-observer';

const animation = keyframes`
  0% { left: 0; }
  50% { left: -200%; }
  100% { left: 0;}
`

const Marquee = ({ children, type }) => {

    return (
        <div css={css`
            height: 25px;
            width: 80%;
            overflow: hidden;
            position: relative;
        `}>
            <div css={css`
                animation: ${animation} 10s linear infinite;
                display: block;
                width: 300%;
                height: 30px;
                position: absolute;
                overflow: hidden;
            `}>
                    {children}
            </div>
        </div>
    )
}

export default Marquee;