import { Container } from "./style";

interface ResultsProps{
  totalPerPerson: string | number | undefined;
  tipAmountPerPerson: string | number;
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
            ${tipAmountPerPerson}
          </p>
        </div>

        <div>
          <p>
            Total
            <br />
            <span>/ person</span>
          </p>
          <p>
            ${totalPerPerson}
          </p>
        </div>
      </section>
      
      <button>
        Reset
      </button>
    </Container>
  );
}