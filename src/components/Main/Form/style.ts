import styled from 'styled-components';
import dolarImg from "../../../assets/icon-dollar.svg";
import personImg from "../../../assets/icon-person.svg";

export const Container = styled.form`
    width: 85vw;
    font-size: 2.8rem;
    border-radius: 2.4rem;
    display: flex;
    flex-direction: column;

    input[type="number"] {
        padding: 0.8rem 1.6rem;
        margin-block-end: 1.6rem;
        
        background-color: var(--very-light-grayish-cyan);
        background-position-x: 1.6rem;
        background-position-y: center;
        text-align: right;
    }

    label , legend{
        font-size: 1.6rem;
        margin-block-end: .8rem;
        color: var(--dark-grayish-cyan);
    }
    
    .bill {
        background: url(${dolarImg}) no-repeat;
    }

    .numOfPeople{
        background: url(${personImg}) no-repeat;
    }

    fieldset {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: .8rem;
        margin-block-end: 1.6rem;
    }

    fieldset label {
        float:left;
        background-color:var(--very-dark-cyan);
        color: var(--white);
        border-radius:4px;
        overflow:auto;
       
    }

    #tip-custom{
        float:left;
        border-radius:4px;
        margin-block-end: 0.8rem;
        font-size: 1.6rem;
        width: 100%;
    }

    fieldset label span {
        text-align:center;
        font-size: 2.4rem;
        padding:0.8rem;
        display:block;
    }

    fieldset label input:not(#tip-custom) {
        position:absolute;
        top:-20px;
    }

    fieldset input:checked + span {
        background-color:var(--strong-cyan);
        color: var(--very-dark-cyan);
    }
`;