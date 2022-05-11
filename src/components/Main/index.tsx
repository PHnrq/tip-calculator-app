import { useEffect, useState } from "react";
import { Form } from "./Form";
import { Results } from "./Results";
import { Container } from "./style";


export function Main() {

  const [bill, setBill] = useState<number>(0)
  const [numOfPeople, setNumOfPeople] = useState<number>(0)
  const [tipValue, setTipValue] = useState<number>(0) //Variavel responsavel por armazenar o valor da gorjeta do serviço.

  const [totalPerPerson, setTotalPerPerson] = useState<number>(0)
  const [tipAmountPerPerson, setTipAmountPerPerson] = useState<number>(0)
  const [isFormReset, setIsFormReset] = useState<boolean>(true)
  
    function handleSetBill(bill: number){
      setBill(bill)
    }
  
    function handlesetNumOfPeople(numOfPeople: number){
      setNumOfPeople(numOfPeople)
    }
  
    function handlesetTipValue(tipValue: number){
      setTipValue(tipValue)
    }
    
  useEffect(() => {
    if(numOfPeople > 0 && bill > 0 && tipValue > 0){
        handleTotalPerPerson(bill, numOfPeople, tipValue)
    }

  }, [bill, numOfPeople, tipValue])

  function handleTotalPerPerson(bill: number, numOfPeople: number, tipValue: number){
    const tipAmount = (bill * (tipValue / 100)) / numOfPeople
    const totalAmount = (bill / numOfPeople) + tipAmount
    setTotalPerPerson(totalAmount)
    setTipAmountPerPerson(tipAmount)
    setIsFormReset(false)
  }
  

  function handleFormReset(){
    setIsFormReset(!isFormReset)
    setTotalPerPerson(0)
    setTipAmountPerPerson(0)
    setBill(0)
    setNumOfPeople(0)
    setTipValue(0)
  }


  return (
    <Container>
        <Form 
          handleSetBill={handleSetBill}
          handlesetNumOfPeople={handlesetNumOfPeople}
          handlesetTipValue={handlesetTipValue}
        />
        <Results 
          totalPerPerson={totalPerPerson}
          tipAmountPerPerson={tipAmountPerPerson}
          isFormReset={isFormReset}
          handleFormReset={handleFormReset}
        />
    </Container>
  );
}