import { Main } from "./components/Main";
import { GlobalStyle } from "./style/GlobalStyle";

export function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <h1>
          Spli
          <br />
          tter
        </h1>
        <Main />
      </div>
    </>
  );
}