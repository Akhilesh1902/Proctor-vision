import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
  classModal: false,
  examModal: false,
  examineeModal: false,
};

export const modalSlice = createSlice({
  name: "button",
  initialState: { value: initialStateValue },
  reducers: {
    toggleClassModal: (state) => {
      state.value = { ...state.value, classModal: !state.value.classModal };
    },
    toggleExamModal: (state) => {
      state.value = { ...state.value, examModal: !state.value.examModal };
    },
    toggleExamineeModal: (state) => {
      state.value = {
        ...state.value,
        examineeModal: !state.value.examineeModal,
      };
    },
  },
});

export const { toggleClassModal, toggleExamModal, toggleExamineeModal } =
  modalSlice.actions;
export default modalSlice.reducer;
