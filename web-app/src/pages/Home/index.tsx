
import React from 'react';
import AppRoutes from "../routes";
import ItemCard from "./ItemCard";

const Home = () => <div className='home-cards flex flex-wrap' >

      {
        AppRoutes.map((route: any) => {
          return <ItemCard key={route.path} name={route.name} navigationURL={route.path} description={route.description} />
        })
      }
</div>;

export default Home;
