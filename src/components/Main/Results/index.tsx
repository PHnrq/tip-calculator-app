import { Container } from "./style";

interface ResultsProps{
  totalPerPerson: string | number | undefined;
}

export function Results({totalPerPerson}: ResultsProps) {
  return (
    <Container>

      <div>
        <p>
          Tip Amount
          <br />
          <span>/ person</span>
        </p>
        <p>
          $4.00
        </p>
      </div>

      <div>
        <p>
          Total
          <br />
          <span>/ person</span>
        </p>
        <p>
          ${totalPerPerson? totalPerPerson : 0.00}
        </p>
      </div>

      <button>
        Reset
      </button>
    </Container>
  );
}