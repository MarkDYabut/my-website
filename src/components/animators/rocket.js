import { keyframes, css } from "@emotion/core";
import React, { useEffect } from "react";
import { useInView } from 'react-intersection-observer';
import styled from "@emotion/styled";

const StyledRocket = styled.div`
    animation: ${fly} 1s ease infinite;
`

const slideIn = keyframes`
    0% {
        transform: translateX(-900px);
    }
    100% {
        transform: translateX(0);
    }
`

const fly = keyframes`
    from, 20%, 53%, 80%, to {
        transform: translate3d(0,0,0);
    }

    40%, 43% {
        transform: translate3d(0, -30px, 0);
    }

    70% {
        transform: translate3d(0, -15px, 0);
    }

    90% {
        transform: translate3d(0,-4px,0);
    }
`;

const Text = styled("text")`
  animation: ${fly} 1s linear infinite;
`;

const Rocket = () => {
    const { ref, inView, entry } = useInView({
        threshold: 0,
    });

    useEffect(() => {
        console.log("inView?: " + inView)
    })

    return (
        <Text>
            <p ref={ref}>
                {inView && (<h2 css={css`animation: ${slideIn} 1s forwards;`}>text</h2>)}
                <StyledRocket>
                    <div>
                        🚀d
                    </div>
                    <div css={css`animation: ${fly} 1s ease infinite;`}>
                        🚀d
                    </div>
                    <p css={css`animation: ${fly} 1s ease infinite;`}>
                        sup
                    </p>
                    <div css={css`animation: ${slideIn} 1s forwards;`}>
                        hi
                    </div>
                </StyledRocket>
            </p>

        </Text>
    )
}



export default Rocket;