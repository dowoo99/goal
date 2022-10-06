import React from 'react';
import Header from '../components/common/Header';
import Layout from '../components/common/Layout';
import Timer from '../components/Home';
const Home = () => {
  return (
    <div>
      <Layout>
        <Header></Header>
        <Timer />
      </Layout>
    </div>
  );
};
export default Home;
