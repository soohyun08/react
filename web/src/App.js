import { BrowserRouter } from "react-router-dom";
import Main from "./layout/Main";
import GlobalStyle from "./assets/styles/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <Main></Main>
    </>
  );
}

export default App;
