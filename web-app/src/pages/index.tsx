import React from "react";
import AppRoutes from "./routes";

import AppRouter from "./AppRouter";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <AppRouter routes={AppRoutes} />
    </Router>
  );
}

export default App;
