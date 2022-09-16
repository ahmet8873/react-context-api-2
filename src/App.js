import React from "react";

import CounterComponent from "./components/CounterComponent";
import CounterProvider from "./components/CounterContext";

function App() {
  return (
    <div>
      <CounterProvider>
        <CounterComponent></CounterComponent>
      </CounterProvider>
    </div>
  );
}

export default App;
