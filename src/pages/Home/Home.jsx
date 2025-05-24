import React from 'react';
import Banner from '../../components/Banner/Banner';
import ExtraBanner from '../../components/ExtraBanner/ExtraBanner';
import NewGroup from '../../components/NewGroup/NewGroup';

const Home = () => {
  return (
    <div>
        <Banner></Banner>
        <NewGroup></NewGroup>
        <ExtraBanner></ExtraBanner>
    </div>
  );
};

export default Home;