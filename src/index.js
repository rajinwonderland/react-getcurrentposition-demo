import React from "react";
import ReactDOM from "react-dom";
import { useGeolocation } from "react-use";
import { nord } from "react-code-blocks";
import CodeDoc from "./components/CodeDoc";

import "./styles.css";

const theme = nord;

function App() {
  const state = useGeolocation();
  return (
    <div className="App">
      <CodeDoc
        header="navigator.geolocation.getCurrentPosition()"
        headerLang="javascript"
        block={`${JSON.stringify(state, null, 2)}`}
        blockLang="json"
        theme={theme}
        loading={state.loading}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
