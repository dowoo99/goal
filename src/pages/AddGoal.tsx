import React from 'react';
import Header from '../components/common/Header';
import Layout from '../components/common/Layout';
import AddGoalInput from '../components/AddGoal';
const AddGoal = () => {
  return (
    <div>
      <Layout>
        <Header></Header>
        <AddGoalInput />
      </Layout>
    </div>
  );
};
export default AddGoal;
