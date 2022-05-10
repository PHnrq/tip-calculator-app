import  styled from 'styled-components';

export const Container = styled.div`
    background: var(--very-dark-cyan);
    border-radius: .8rem;
    padding:  2.4rem 1.6rem 1.6rem;

    div{ 
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 1.6rem;
    }
    
    div p:nth-child(1){
        font-size: 1.6rem;
        color: var(--white);
    }

    div p:nth-child(2){
        font-size: 2.8rem;
        color: var(--strong-cyan);
    }

    span{
        color: var(--grayish-cyan);
    }

    button{ 
        width: 100%;
        padding: .8rem;
        font-size: 1.6rem;
        background: var(--strong-cyan);
        color: var(--very-dark-cyan);
        text-transform: uppercase;
        border-radius: .5rem;
    }

    @media (min-width: 768px) {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content:space-between;
        padding: 4.2rem;
        
    }

    @media (min-width: 1024px) {
        div p:nth-child(2){
        font-size: 3.6rem;
    }

    }
`