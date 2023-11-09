
import React from 'react';
import ItemCard from "./ItemCard";

const Home = ({ defaultRoutes: AppRoutes }: any) => {
  return (<div className='home-cards flex flex-wrap' >
    {
      AppRoutes?.map?.((route: any) => {
        return <ItemCard key={route.path} name={route.name} navigationURL={route.path} description={route.description} />
      })
    }
  </div>)
};

export default Home;
