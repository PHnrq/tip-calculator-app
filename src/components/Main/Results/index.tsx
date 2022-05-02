import { Container } from "./style";

export function Results() {
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
          $32.00
        </p>
      </div>

      <button>
        Reset
      </button>
    </Container>
  );
}