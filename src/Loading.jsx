import React from "react";
import styled from "styled-components";
const LoaderWrapper = styled.div`
    position: absolute;
    top: 50%; left: calc(50% + 380px);
    transform: translate(calc(-50% - 190px), -50%);
`;
const Loading = () => {
    return(
        <>
            <LoaderWrapper className="loader">Loading...</LoaderWrapper>
        </>
    )
}
export default Loading;