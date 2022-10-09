import React from 'react';
import useTodos from '../../hooks/useAddGoal';
import { Goal } from '../../types/types';
import AddFormItem from './AddFormItem';
const AddForm = () => {
  const goal = useTodos();
  return (
    <div>
      {goal.map((togoal) => (
        <AddFormItem goal={togoal}></AddFormItem>
      ))}
    </div>
  );
};
export default React.memo(AddForm);
