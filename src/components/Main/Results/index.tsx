import { Container } from "./style";

interface ResultsProps{
  totalPerPerson: number;
  tipAmountPerPerson: number;
}

export function Results({totalPerPerson, tipAmountPerPerson}: ResultsProps) {

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
            ${tipAmountPerPerson.toFixed(2)}
          </p>
        </div>

        <div>
          <p>
            Total
            <br />
            <span>/ person</span>
          </p>
          <p>
            ${totalPerPerson.toFixed(2)}
          </p>
        </div>
      </section>
      
      <button>
        Reset
      </button>
    </Container>
  );
}