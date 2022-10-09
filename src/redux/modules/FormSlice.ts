import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createAction } from '@reduxjs/toolkit';
export interface ToGoal {
  title: string;
  goal: string;
  id: number | null;
}

const initialState = [{ title: '테스트1', goal: '살빼자', id: 1 }] as ToGoal[];
export const userGoalSlice = createSlice({
  name: 'userGoal',
  initialState,
  reducers: {
    addGoal(state, action: PayloadAction<ToGoal>) {
      return [...state, action.payload];
    },
  },
});
export default userGoalSlice.reducer;

export const { addGoal } = userGoalSlice.actions;
