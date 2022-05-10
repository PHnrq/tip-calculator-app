import { useState } from "react";
import { Form } from "./Form";
import { Results } from "./Results";
import { Container } from "./style";


export function Main() {

  const [totalPerPerson, setTotalPerPerson] = useState<number>(0)
  const [tipAmountPerPerson, setTipAmountPerPerson] = useState<number>(0)

  function handleTotalPerPerson(bill: number, numOfPeople: number, tipValue: number){
    const tipAmount = (bill * (tipValue / 100)) / numOfPeople
    const totalAmount = (bill / numOfPeople) + tipAmount
    setTotalPerPerson(totalAmount)
    setTipAmountPerPerson(tipAmount)
  }

  return (
    <Container>
        <Form 
          handleTotalPerPerson={handleTotalPerPerson}
        />
        <Results 
          totalPerPerson={totalPerPerson}
          tipAmountPerPerson={tipAmountPerPerson}
        />
    </Container>
  );
}