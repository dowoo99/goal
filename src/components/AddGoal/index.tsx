import React, { useState, useCallback } from 'react';
import { useAppDispatch } from '../../redux/config/configStore';
import { addGoal } from '../../redux/modules/FormSlice';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/config/configStore';
import AddForm from './AddForm';

const AddGoalInput = () => {
  const touser = useSelector((state: RootState) => state.form);
  const dispatch = useAppDispatch();
  const [form, setForm] = useState({
    title: '',
    goal: '',
    id: null,
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
      id: null,
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
      <AddForm />
    </div>
  );
};
export default AddGoalInput;
