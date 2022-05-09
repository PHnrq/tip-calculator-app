import { Container } from "./style";

interface ResultsProps{
  totalPerPerson: string | number | undefined;
  tipAmountPerPerson: string | number;
}

export function Results({totalPerPerson, tipAmountPerPerson}: ResultsProps) {

  return (
    <Container>

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

      <button>
        Reset
      </button>
    </Container>
  );
}