import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import AppRoutes from "./routes";

// Sample components for different routes
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

function CircularIndeterminate() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
  );
}
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
                element={
                  <Suspense fallback={<CircularIndeterminate></CircularIndeterminate>}>
                    <Component />
                  </Suspense>
                }></Route>
            })
          }
        </Routes>
      </div>
    </Router>
  );
}

export default App;
