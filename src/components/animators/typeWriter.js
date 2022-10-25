import { keyframes, css } from "@emotion/core";
import React, { useEffect } from "react";
import { useInView } from 'react-intersection-observer';
import styled from "@emotion/styled";

const typing = keyframes`
    from { width: 0 }
    to { width: 100% }
`

const blink = keyframes`
    from, to { border-color: transparent }
    50% { border-color: orange; }
`

const StyledTypeWriter = styled.h1`
    overflow: hidden;
    border-right: .15em solid orange;
    white-space: nowrap;
    margin: 0 auto;
    letter-spacing: .15em;
`

const TypeWriter = ({ children, type }) => {
    const { ref, inView, entry } = useInView({
        threshold: 0,
    });

    return (
        <div ref={ref}>s
            {<StyledTypeWriter css={inView && css`
                animation: ${typing} 3.5s steps(40, end);
                animation: ${blink} .75s step-end infinite;
            `}>
                {children}
            </StyledTypeWriter>
            }
        </div>
    )
}

export default TypeWriter;