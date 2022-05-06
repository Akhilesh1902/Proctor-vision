import userReducer from "./user";
import modalReducer from "./modal";
import dashTogglesReducer from "./dashtoggles";
import examReducer from "./exams";
import classReducer from "./classes";

export { login } from "./user";
export {
  toggleClassModal,
  toggleExamModal,
  toggleExamineeModal,
} from "./modal";
export {
  toggleEditMode,
  toggleExaminee,
  toggleRecordings,
  toggleExpand,
  toggleClass,
  toggleStudentRecording,
  toggleJoinExam,
  toggleExamPage,
} from "./dashtoggles";
export { addExam, removeExam } from "./exams";
export { addClass } from "./classes";

export const allReducer = {
  userReducer,
  modalReducer,
  dashTogglesReducer,
  examReducer,
  classReducer,
};
