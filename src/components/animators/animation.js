import { keyframes, css } from "@emotion/core";
import React, { useEffect } from "react";
import { useInView } from 'react-intersection-observer';

const animation = keyframes`
    0% {
        transform: translateX(-900px);
    }
    100% {
        transform: translateX(0);
    }
`

const Slide = ({ children, type }) => {
    const { ref, inView, entry } = useInView({
        threshold: 0,
    });

    return (
        <div ref={ref}>s
            {<div css={inView && css`animation: ${animation} 1s forwards;`}>
                {children}
            </div>
            }
        </div>
    )
}

export default Animation;