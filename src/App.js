import React from "react";
import CHeader from "./components/Layout/CHeader";
import Meals from "./components/Meals/Meals";
function App() {
  return (
    <React.Fragment>
      <CHeader />
      <main>
        <Meals />
      </main>
    </React.Fragment>
  );
}

export default App;
