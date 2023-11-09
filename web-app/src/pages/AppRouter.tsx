import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

// Sample components for different routes
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { AppRouteProps } from "./routes";

function CircularIndeterminate() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
  );
}



function AppRouter({routes:AppRoutes}:any) {
  return (
      <div>
        <li>
          <Link to="/">Home</Link>
        </li>
        <Routes>
          {
            AppRoutes?.map((routes: any) => {
              const Component = routes.component;
              return <Route path={routes.path} key={routes.path}
                element={
                  <Suspense fallback={<CircularIndeterminate></CircularIndeterminate>}>
                    <Component defaultRoutes={AppRoutes}/>
                  </Suspense>
                }></Route>
            })
          }
        </Routes>
      </div>
  );
}

export default AppRouter;
