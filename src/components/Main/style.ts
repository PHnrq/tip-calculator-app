import styled from "styled-components";

export const Container = styled.main`
    background: var(--white);
    padding: 2.4rem;
    font-size: 2.8rem;
    border-radius: 2.4rem;

    @media (min-width: 768px) {
        display: flex;
        flex-direction: row;
        gap: 4.8rem;

        max-width: 85vw;
        padding: 3.2rem;
    }

    @media (min-width: 1024px) {
        max-width: 70vw;
    }



`;