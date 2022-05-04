import { useState } from "react";
import { Form } from "./Form";
import { Results } from "./Results";
import { Container } from "./style";

export function Main() {

  const [totalPerPerson, setTotalPerPerson] = useState<number | string>()

  function handleTotalPerPerson(result: number){
    const resultFormat = result.toFixed(2)
    setTotalPerPerson(resultFormat)
  }

  return (
    <Container>
        <Form 
          handleTotalPerPerson={handleTotalPerPerson}
        />
        <Results 
          totalPerPerson={totalPerPerson}
        />
    </Container>
  );
}