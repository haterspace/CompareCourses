import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpenCourseComplaint: null, // Флаг для открытия/закрытия модального окна
  isOpenForRateJob: null,
  isOpenForOtherJob: null,
  isOpenForEditCourseModal: null,
  modalType: null, // Тип модального окна (например, 'login', 'register', 'settings', и т.д.)
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openCourseComplaintModal: (state, action) => {
      state.isOpenCourseComplaint = action.payload;
      state.modalType = action.payload;
    },
    closeCourseComplaintModal: (state) => {
      state.isOpenCourseComplaint = null;
      state.modalType = null;
    },
    openRateJobModal: (state, action) => {
      state.isOpenForRateJob = action.payload;
      state.modalType = action.payload;
    },
    closeRateJobModal: (state) => {
      state.isOpenForRateJob = null;
      state.modalType = null;
    },
    openRateOtherModal: (state, action) => {
      state.isOpenForOtherJob = action.payload;
      state.modalType = action.payload;
    },
    closeRateOtherModal: (state) => {
      state.isOpenForOtherJob = null;
      state.modalType = null;
    },
    openEditCourseModal: (state, action) => {
      state.isOpenForEditCourseModal = action.payload;
      console.log(action.payload);
      state.modalType = action.payload;
    },
    closeEditCourseModal: (state) => {
      state.isOpenForEditCourseModal = null;
      state.modalType = null;
    },
  },
});

export const {
  openCourseComplaintModal,
  closeCourseComplaintModal,
  openRateJobModal,
  closeRateJobModal,
  openRateOtherModal,
  closeRateOtherModal,
  openEditCourseModal,
  closeEditCourseModal,
} = modalSlice.actions;
export default modalSlice.reducer;
