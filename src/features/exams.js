import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = JSON.parse(localStorage.getItem("_exams")) || [];

export const examSlice = createSlice({
  name: "exams",
  initialState: { value: initialStateValue },
  reducers: {
    addExam: (state, action) => {
      state.value.push(action.payload);
      localStorage.setItem("_exams", JSON.stringify(state.value));
    },
    removeExam: (state, action) => {
      for (let i = 0; i < state.value.length; i++) {
        if (state.value[i].examName === action.payload)
          state.value.splice(i, 1);
      }
      localStorage.setItem("_exams", JSON.stringify(state.value));
    },
  },
});

export const { addExam, removeExam } = examSlice.actions;
export default examSlice.reducer;
