import { useState } from "react";
import { Form } from "./Form";
import { Results } from "./Results";
import { Container } from "./style";


export function Main() {

  const [totalPerPerson, setTotalPerPerson] = useState<number | string>()
  const [tipAmountPerPerson, setTipAmountPerPerson] = useState<number | string>('0.00')

  function handleTotalPerPerson(result: number){
    const resultFormat = result.toFixed(2)
    setTotalPerPerson(resultFormat)
  }

  function handleTipAmountPerPerson(bill: number | string, numOfPeople: number | string, tipValue: number | string){
    
    const tipAmount = Number(bill) * (Number(tipValue) / 100);
    setTipAmountPerPerson((tipAmount / Number(numOfPeople)).toFixed(2))
  }

  return (
    <Container>
        <Form 
          handleTotalPerPerson={handleTotalPerPerson}
          handleTipAmountPerPerson={handleTipAmountPerPerson}
        />
        <Results 
          totalPerPerson={totalPerPerson}
          tipAmountPerPerson={tipAmountPerPerson}
        />
    </Container>
  );
}