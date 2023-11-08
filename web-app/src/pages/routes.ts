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

interface AppRoute {
  path: string;

  name: string;

  description: string;
  component: React.ComponentType;
}

const AppRoutes: AppRoute[] = [
  {
    path: "/sign-up",
    name: "Sign Up Page",
    description: "Create a new account to access our services.",
    component: SignUp,
  },
  {
    path: "/pricing",
    name: "Pricing Page",
    description:
      "Check out our pricing plans and choose the one that suits your needs.",
    component: Pricing,
  },
  {
    path: "/calendar",
    name: "Calendar Page",
    description:
      "View and manage your events and appointments on our calendar.",
    component: Calendar,
  },
  {
    path: "/home",
    name: "Home Page",
    description:
      "Welcome to our home page where you can find the latest updates.",
    component: Home,
  },
  {
    path: "/blog",
    name: "Blog Page",
    description: "Explore our blog for interesting articles and news.",
    component: Blog,
  },
  {
    path: "/sign-in",
    name: "Sign In Page",
    description: "Log in to your account and access your profile and settings.",
    component: SignIn,
  },
  {
    path: "/products",
    name: "Products Page",
    description: "Browse and purchase our range of products and services.",
    component: Products,
  },
  {
    path: "/map",
    name: "Map Page",
    description: "Discover locations and navigate using our interactive map.",
    component: Map,
  },
  {
    path: "/dashboard",
    name: "Dashboard Page",
    description: "Access your user dashboard and manage your account.",
    component: Dashboard,
  },
  {
    path: "/shopping-cart",
    name: "Shopping Cart Page",
    description:
      "View and manage items in your shopping cart before making a purchase.",
    component: ShoppingCart,
  },
];

export default AppRoutes;
