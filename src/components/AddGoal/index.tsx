import React, { useState } from 'react';
import { useAppDispatch } from '../../redux/config/configStore';
import { addGoal } from '../../redux/modules/FormSlice';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/config/configStore';

const AddGoalInput = () => {
  const touser = useSelector((state: RootState) => state.form.usergoal);
  const dispatch = useAppDispatch();
  const [form, setForm] = useState({
    title: '',
    goal: '',
  });
  console.log(touser);
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addGoal(form));
    setForm({
      title: '',
      goal: '',
    });
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <input
          name="title"
          value={form.title}
          onChange={onChangeHandler}
          type="text"
        ></input>
        <input
          name="goal"
          value={form.goal}
          onChange={onChangeHandler}
          type="text"
        ></input>
        <button>등록하기</button>
      </form>
    </div>
  );
};
export default AddGoalInput;
