import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface toGoal {
  title: string;
  goal: string;
}
interface UserGoal {
  usergoal: toGoal[];
}
const initialState: UserGoal = {
  usergoal: [],
};
export const userGoalSlice = createSlice({
  name: 'userGoal',
  initialState,
  reducers: {
    addGoal: (state, action) => {
      state.usergoal = action.payload;
    },
  },
});
export default userGoalSlice.reducer;

export const { addGoal } = userGoalSlice.actions;
