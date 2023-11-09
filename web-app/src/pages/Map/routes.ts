import React from "react";
import { AppRouteProps } from "../routes";

const Home = React.lazy(() => import("../Home"));

const CustomMap = React.lazy(() => import("./subpages/CustomMap"));
const PinPage = React.lazy(() => import("./subpages/Pin"));
const LocateMe = React.lazy(() => import("./subpages/LocateMe"));
const SelectedGrid = React.lazy(() => import("./subpages/SelectedGrid"));
const DraggablePin= React.lazy(() => import("./subpages/DraggablePin"));
const ViewBound= React.lazy(() => import("./subpages/ViewBound"));
const Animate= React.lazy(() => import("./subpages/Animate"));
const ZoomOut= React.lazy(() => import("./subpages/ZoomOut"));


const AppRoutes: AppRouteProps[] = [
    {
      path: "custom",
      name: "Map Page",
      description: "Create your own custom maps with our interactive tool.",
      component: CustomMap,
    },
    {
      path: "pin",
      name: "Map Pin Page",
      description: "Drop pins and mark your favorite locations on our map.",
      component: PinPage,
    },
    {
      path: "locate-me",
      name: "Locate Me Page",
      description: "Let our map guide you with real-time location tracking.",
      component: LocateMe,
    },
    {
      path: "selected-grid",
      name: "Selected Grid Map",
      description: "Explore locations with a customizable grid view on the map.",
      component: SelectedGrid,
    },
    {
      path: "draggable-pin",
      name: "Draggable Pin Map",
      description: "Drag and drop pins for an interactive mapping experience.",
      component: DraggablePin,
    },
    {
      path: "view-bound",
      name: "View Bound Page",
      description: "Discover locations within specified boundaries on the map.",
      component: ViewBound,
    },
    {
      path: "animate",
      name: "Animate View Page",
      description: "Experience dynamic map views with smooth animations.",
      component: Animate,
    },
    {
      path: "zoom-out",
      name: "Zoom Out Page",
      description: "Navigate the map with ease using our zoom-out feature.",
      component: ZoomOut,
    },
    {
      path: "*",
      name: "Home Page",
      description: "Welcome to our home page where you can find the latest updates.",
      component: Home,
    },
  ];
  

export default AppRoutes;
