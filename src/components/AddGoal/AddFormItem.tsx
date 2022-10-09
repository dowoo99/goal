import React from 'react';
import { Goal } from '../../types/types';
export type TodoItemProps = {
  goal: Goal;
};
const AddFormItem = ({ goal }: TodoItemProps) => {
  const deleteHandler = () => {};
  return (
    <>
      <div style={{ display: 'flex' }}>
        제목:{goal.title}목표:{goal.goal}
        <button>x</button>
      </div>
    </>
  );
};
export default AddFormItem;
