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
        padding: 0.8rem 2.4rem;
        margin-block-end: 1.6rem;
        
        background-color: var(--very-light-grayish-cyan);
        background-position-x: 1.6rem;
        background-position-y: center;
        text-align: right;
    }

    input[type="number"]:focus {
        outline-color: hsl(172, 67%, 45%);
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
       
        transition: all 0.3s ease;
    }

    fieldset label:hover {
        filter: brightness(1.3);
        cursor: pointer;
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

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }

    input[type=number] {
        -moz-appearance: textfield;
    }

    button:disabled {
        background-color: black;
    }

    div{
        display: flex;
        flex-direction: row;
        align-items: baseline;
        justify-content: space-between;

        span{
            display: none;
        }
        
        .invalid-value {
            display: unset;
            color: red;
            font-size: 1.4rem;
        }
    }

    @media (min-width: 768px) {
        flex: 1;
        padding: 2.4rem;

        fieldset{
          grid-template-columns: 1fr 1fr 1fr;
        }
    }
`;