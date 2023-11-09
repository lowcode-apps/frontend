import React from "react";

const SignUp = React.lazy(() => import("./SignUp"));
const Pricing = React.lazy(() => import("./Pricing"));
const Calendar = React.lazy(() => import("./Calendar"));
const Home = React.lazy(() => import("./Home"));
const Products = React.lazy(() => import("./Products"));
const SignIn = React.lazy(() => import("./SignIn"));
const Map = React.lazy(() => import("./Map"));
const Blog = React.lazy(() => import("./Blog"));
const Dashboard = React.lazy(() => import("./Dashboard"));
const ShoppingCart = React.lazy(() => import("./ShoppingCart"));
const AdminPanel = React.lazy(() => import("./AdminPanel"));
const MUIApp = React.lazy(() => import("./MUIApp"));


export interface AppRouteProps {
  path: string;
  name: string;
  description: string;
  component: React.ComponentType;
}

const AppRoutes: AppRouteProps[]  = [
  {
    path: "/sign-up",
    name: "Sign Up Page",
    description: "Kickstart your journey by creating a new account with us.",
    component: SignUp,
  },
  {
    path: "/pricing",
    name: "Pricing Page",
    description: "Explore our flexible pricing plans tailored just for you.",
    component: Pricing,
  },
  {
    path: "/calendar",
    name: "Calendar Page",
    description: "Effortlessly manage your events and appointments on our intuitive calendar.",
    component: Calendar,
  },
  {
    path: "/home",
    name: "Home Page",
    description: "Stay in the loop with our latest updates and announcements.",
    component: Home,
  },
  {
    path: "/blog",
    name: "Blog Page",
    description: "Dive into a world of intriguing articles and stay informed with our blog.",
    component: Blog,
  },
  {
    path: "/sign-in",
    name: "Sign In Page",
    description: "Securely log in to your account and take control of your profile and settings.",
    component: SignIn,
  },
  {
    path: "/products",
    name: "Products Page",
    description: "Discover and purchase from our curated range of high-quality products and services.",
    component: Products,
  },
  {
    path: "/map/*",
    name: "Map Page",
    description: "Embark on a journey of exploration using our feature-rich interactive map.",
    component: Map,
  },
  {
    path: "/dashboard",
    name: "Dashboard Page",
    description: "Seamlessly manage your account with our user-friendly dashboard.",
    component: Dashboard,
  },
  {
    path: "/shopping-cart",
    name: "Shopping Cart Page",
    description: "Organize and review your shopping cart contents before making a purchase.",
    component: ShoppingCart,
  },
  {
    path: "/admin-panel",
    name: "Admin Panel Page",
    description: "Efficiently handle application settings and configurations in our admin panel.",
    component: AdminPanel,
  },
  {
    path: "/onepirate/*",
    name: "New App Page",
    description: "Explore the features of our new application with a sleek and modern interface.",
    component: MUIApp,
  },
  {
    path: "/",
    name: "Home Page",
    description: "Welcome to the heart of our online space, where updates and news converge.",
    component: Home,
  },
];


export default AppRoutes;
