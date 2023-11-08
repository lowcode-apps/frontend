import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import AppRoutes from "./routes";

// Sample components for different routes

function App() {
  return (
    <Router>
      <div>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <Routes>
          {
            AppRoutes.map((routes: any) => {
              const Component = routes.component;
              return <Route path={routes.path} key={routes.path}
                element={<Component />}></Route>
            })
          }
        </Routes>
      </div>
    </Router>
  );
}

export default App;
