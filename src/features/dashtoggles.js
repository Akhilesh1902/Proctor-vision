import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
  editMode: false,
  viewExaminee: false,
  viewRecordings: false,
  viewStudentRecording: false,
  viewClass: true,
  expand: false,
  viewExam: false,
  joinExam: false,
  examPage: false,
};

export const dashToggleSlice = createSlice({
  name: "dashtoggles",
  initialState: { value: initialStateValue },
  reducers: {
    toggleEditMode: (state) => {
      state.value = { ...state.value, editMode: !state.value.editMode };
    },
    toggleExaminee: (state) => {
      state.value = { ...state.value, viewExaminee: !state.value.viewExaminee };
    },
    toggleClass: (state) => {
      state.value = { ...state.value, viewClass: !state.value.viewClass };
    },
    toggleExam: (state) => {
      state.value = { ...state.value, viewExam: !state.value.viewExam };
    },
    toggleJoinExam: (state) => {
      state.value = { ...state.value, joinExam: !state.value.joinExam };
    },

    toggleRecordings: (state) => {
      state.value = {
        ...state.value,
        viewRecordings: !state.value.viewRecordings,
      };
    },
    toggleStudentRecording: (state) => {
      state.value = {
        ...state.value,
        viewStudentRecording: !state.value.viewStudentRecording,
      };
    },
    toggleExpand: (state) => {
      state.value = { ...state.value, expand: !state.value.expand };
    },
    toggleExamPage: (state) => {
      state.value = { ...state.value, examPage: !state.value.examPage };
    },
  },
});

export const {
  toggleEditMode,
  toggleExaminee,
  toggleRecordings,
  toggleExpand,
  toggleClass,
  toggleStudentRecording,
  toggleExam,
  toggleJoinExam,
  toggleExamPage,
} = dashToggleSlice.actions;
export default dashToggleSlice.reducer;
