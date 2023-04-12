import React from "react";

import LandingPage from "./layout/LandingPage/LandingPage";

function App() {
  const [count, setCount] = React.useState(0);

  return (
      <LandingPage />
  );
}

export default App;
