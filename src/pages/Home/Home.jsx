import React from 'react';
import Banner from '../../components/Banner/Banner';
import ExtraBanner from '../../components/ExtraBanner/ExtraBanner';
import NewGroup from '../../components/NewGroup/NewGroup';
import SuccessStories from '../SuccessStories/SuccessStories';
import JoinOurCommunity from '../JoinOurCommunity/JoinOurCommunity';
import FAQ from '../FAQ/FAQ';

const Home = () => {
  return (
    <div>
        <Banner></Banner>
        <NewGroup></NewGroup>
        <ExtraBanner></ExtraBanner>
        <SuccessStories></SuccessStories>
        <JoinOurCommunity></JoinOurCommunity>
        <FAQ></FAQ>
    </div>
  );
};

export default Home;