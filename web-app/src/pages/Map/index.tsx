import React from "react";
import AppRoutes from "./routes";
import AppRouter from "../AppRouter";


function Map() {
  return (
    <AppRouter routes={AppRoutes} />
  );
}

export default Map;
