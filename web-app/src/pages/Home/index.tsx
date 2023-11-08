
import React from 'react';
import AppRoutes from "../routes";
import ItemCard from "./ItemCard";

const Home = () => <div>
  <nav>
    <ul>
      {
        AppRoutes.map((route: any) => {
          return <ItemCard key={route.path} name={route.name} navigationURL={route.path} description={route.description} />
        })
      }
    </ul>
  </nav>
</div>;

export default Home;
