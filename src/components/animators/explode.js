import { keyframes, css } from "@emotion/core";
import React, { useEffect } from "react";
import { useInView } from 'react-intersection-observer';

const animation = keyframes`
    0% {
        transform: rotate(0deg) scale(1.0);
    }
    40% {
        transform: rotate(700deg);
    }
    50% {
        transform: rotate(720deg) scale(3.0);
    }
    90% {
        transform: rotate(20deg);
        
    }
    100% {
        transform: rotate(0deg) scale(1.0);
    }
`

const Explode = ({ children, type }) => {
    const { ref, inView, entry } = useInView({
        threshold: 0,
    });

    return (
        <div ref={ref}>
            {<div css={inView && css`
                animation: ${animation} 5s linear infinite;
            `}>
                {children}
            </div>
            }
        </div>
    )
}

export default Explode;