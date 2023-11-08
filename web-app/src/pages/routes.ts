

import React from 'react';
import SignUp from './SignUp'; // Import your component
import Pricing from './Pricing';
import Calendar from './Calendar';
import Home from "./Home";
import Products from "./Products";
import SignIn from "./SignIn";
import Map from "./Map";
import Blog from "./Blog";
import Dashboard from "./Dashboard";
import ShoppingCart from "./ShoppingCart";

interface AppRoute{
    path: string,

    name: string,

    description: string,
    component: React.ComponentType 
}

const AppRoutes: AppRoute[] =[
    {
      path: '/sign-up',
      name: "Sign Up Page",
      description: "Create a new account to access our services.",
      component: SignUp,
    },
    {
      path: '/pricing',
      name: "Pricing Page",
      description: "Check out our pricing plans and choose the one that suits your needs.",
      component: Pricing,
    },
    {
      path: '/calendar',
      name: "Calendar Page",
      description: "View and manage your events and appointments on our calendar.",
      component: Calendar,
    },
    {
      path: '/home',
      name: "Home Page",
      description: "Welcome to our home page where you can find the latest updates.",
      component: Home,
    },
    {
      path: '/blog',
      name: "Blog Page",
      description: "Explore our blog for interesting articles and news.",
      component: Blog,
    },
    {
      path: '/sign-in',
      name: "Sign In Page",
      description: "Log in to your account and access your profile and settings.",
      component: SignIn,
    },
    {
      path: '/products',
      name: "Products Page",
      description: "Browse and purchase our range of products and services.",
      component: Products,
    },
    {
      path: '/map',
      name: "Map Page",
      description: "Discover locations and navigate using our interactive map.",
      component: Map,
    },
    {
      path: '/dashboard',
      name: "Dashboard Page",
      description: "Access your user dashboard and manage your account.",
      component: Dashboard,
    },
    {
      path: '/shopping-cart',
      name: "Shopping Cart Page",
      description: "View and manage items in your shopping cart before making a purchase.",
      component: ShoppingCart,
    },
  ];
  
  

export default AppRoutes;
