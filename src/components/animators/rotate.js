import { keyframes, css } from "@emotion/core";
import React, { useEffect } from "react";
import { useInView } from 'react-intersection-observer';

const animation = keyframes`
    0% {
        transform: rotate(0deg) translateX(0%);
    }
    40% {
        transform: rotate(700deg) translateX(25%);
    }
    50% {
        transform: rotate(720deg) translateX(0%);
    }
    90% {
        transform: rotate(20deg) translateX(25%);
        
    }
    100% {
        transform: rotate(0deg) translateX(0%);
    }
`

const Rotate = ({ children, type }) => {
    const { ref, inView, entry } = useInView({
        threshold: 0,
    });

    return (
        <div ref={ref}>
            {<div css={inView && css`animation: ${animation} 10s linear infinite;`}>
                {children}
            </div>
            }
        </div>
    )
}

export default Rotate;