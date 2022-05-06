import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = { cardCount: 0 };

export const buttonSlice = createSlice({
  name: "button",
  initialState: { value: initialStateValue },
  reducers: {
    cardCount: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { create } = buttonSlice.actions;
export default buttonSlice.reducer;
