import { useEffect, useState } from "react";
import { Container } from "./style";

interface FormProps{
    handleTotalPerPerson: (arg0: number) => void;
    handleTipAmountPerPerson: (arg0: number|string, arg1: number | string, arg2: number | string) => void;
}

export function Form({handleTotalPerPerson, handleTipAmountPerPerson}: FormProps) {

    const [bill, setBill] = useState<string >('')

    const [numOfPeople, setNumOfPeople] = useState<string>('')

    const [tipValue, setTipValue] = useState<string>('') //Variavel responsavel por armazenar o valor da gorjeta do serviço.

    function handletip(e: React.ChangeEvent<HTMLInputElement>) { //Função responsavel por alterar o valor da gorjeta do serviço.
        setTipValue(e.target.value)
    }


    useEffect(() => {
        if(numOfPeople.length > 0 && bill.length > 0){
            const totalPerPerson =  Number(bill) / Number(numOfPeople)
            handleTotalPerPerson(totalPerPerson)
        }else{
            handleTotalPerPerson(0)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [bill, numOfPeople])

    useEffect(() => {
        
        if(numOfPeople.length > 0 && bill.length > 0 && tipValue.length > 0){
        handleTipAmountPerPerson(bill, numOfPeople, tipValue)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [tipValue, numOfPeople, bill])




    return (
        <Container>
            <label htmlFor="bill">Bill</label>
            <input 
                type="number" 
                id="bill" 
                name="bill" 
                className="bill" 
                placeholder='10.00'
                onChange={event => setBill(event.target.value)}
            />

            <fieldset>
                <legend>Select Tip %</legend>

                <label htmlFor="tip-5" >
                    <input 
                        type="radio" 
                        name="tip" 
                        id="tip-5" 
                        value="5"
                        onChange={handletip}
                        />
                    <span>5%</span>
                </label>
                

                <label htmlFor="tip-10" >
                    <input 
                        type="radio" 
                        name="tip" 
                        id="tip-10" 
                        value="10"
                        onChange={handletip}/>
                    <span>10%</span>
                </label>

                <label htmlFor="tip-15" >
                    <input 
                        type="radio" 
                        name="tip" 
                        id="tip-15" 
                        value="15"
                        onChange={handletip}/>
                    <span>15%</span>
                </label>

                <label htmlFor="tip-25" >
                    <input 
                        type="radio" 
                        name="tip" 
                        id="tip-25" 
                        value="25"
                        onChange={handletip}/>
                    <span>25%</span>
                </label>

                <label htmlFor="tip-50" >
                    <input 
                        type="radio" 
                        name="tip" 
                        id="tip-50" 
                        value="50"
                        onChange={handletip}/>
                    <span>50%</span>
                </label>

                <input 
                    type='number' 
                    name='tip' 
                    id='tip-custom' 
                    placeholder='Custom'
                    onChange={handletip}/>

            </fieldset>

            <label htmlFor="numOfPeople">Number of People</label>
            <input 
                type="number" 
                name="numOfPeople" 
                id="numOfPeople" 
                className="numOfPeople" 
                placeholder="1"
                onChange={event => setNumOfPeople(event.target.value)}/>
        </Container>
    );
}