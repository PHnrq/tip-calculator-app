import { Container } from "./style";

interface ResultsProps{
  totalPerPerson: number;
  tipAmountPerPerson: number;
  isFormReset: boolean;
  handleFormReset: () => void;
}

export function Results({totalPerPerson, tipAmountPerPerson, isFormReset, handleFormReset}: ResultsProps) {
  
  const defaultValue = 0.00
  const form = document.getElementById("form") as HTMLFormElement;

  function resetForm (){ 
    console.log("clicked")
    form?.reset();
    handleFormReset();
  }

  function isButtonDisabled (){
    return isFormReset;
  }

  return (
    <Container>
      <section>
        <div>
          <p>
            Tip Amount
            <br />
            <span>/ person</span>
          </p>
          <p>
            ${isFormReset? defaultValue.toFixed(2) : tipAmountPerPerson.toFixed(2)}
          </p>
        </div>

        <div>
          <p>
            Total
            <br />
            <span>/ person</span>
          </p>
          <p>
            ${isFormReset? defaultValue.toFixed(2) : totalPerPerson.toFixed(2)}
          </p>
        </div>
      </section>
      
      <button
        onClick={resetForm}
        disabled={isButtonDisabled()}
      >
        Reset
      </button>
    </Container>
  );
}