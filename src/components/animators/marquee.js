import { keyframes, css } from "@emotion/core";
import React, { useEffect } from "react";
import { useInView } from 'react-intersection-observer';

const animation = keyframes`
  0% { left: 0; }
  100% { left: -100%; }
`

const Marquee = ({ children, type }) => {

    return (
        <div css={css`
            height: 25px;
            width: 85vw;
            overflow: hidden;
            position: relative;
        `}>
            <div css={css`
                animation: ${animation} 2s linear;
                display: block;
                width: 1000%;
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