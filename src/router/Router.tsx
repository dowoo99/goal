import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddGoal from '../pages/AddGoal';
import Home from '../pages/Home';
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/addgoal" element={<AddGoal></AddGoal>}></Route>
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
