import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = JSON.parse(localStorage.getItem("_classes")) || [];

export const classSice = createSlice({
  name: "classes",
  initialState: { value: initialStateValue },
  reducers: {
    addClass: (state, action) => {
      state.value.push(action.payload);
      localStorage.setItem("_classes", JSON.stringify(state.value));
    },
  },
});

export const { addClass } = classSice.actions;
export default classSice.reducer;
