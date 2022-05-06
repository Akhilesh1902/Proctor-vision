import { createSlice } from "@reduxjs/toolkit";

const lS = window.localStorage.getItem("_user");

const initialStateValue = JSON.parse(lS) || { name: "", id: "", status: "" };

export const userSlice = createSlice({
  name: "user",
  initialState: { value: initialStateValue },
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
      window.localStorage.setItem("_user", JSON.stringify(action.payload));
    },
  },
});

export const { login } = userSlice.actions;
export default userSlice.reducer;
