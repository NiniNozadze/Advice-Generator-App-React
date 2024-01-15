import { useState } from "react";
import "./App.css";
import FirstComponent from "./FirstComponent";
import GlobalStyles from "./GlobalStyles";
import { Helmet } from "react-helmet";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <GlobalStyles />
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@800&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <FirstComponent />
    </>
  );
}

export default App;
