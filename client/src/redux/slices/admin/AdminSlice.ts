import { createSlice } from '@reduxjs/toolkit';
import { AdminCommentComplaintType, AdminCourseComplaintType } from '../../../types/adminPageTypes';
import {
  deleteAdminCourseComplaintThunk,
  deleteCommentByAdminThunk,
  deleteCourseByAdminThunk,
  getAdminCommentComplaintsThunk,
  getAdminCourseComplaintsThunk,
  setNeedToModerateCommentFalseByAdminThunk,
  setNeedToModerateFalseByAdminThunk,
} from './AdminThunks';

type AdminCourseComplaintState = {
  adminCourse: AdminCourseComplaintType[];
  adminComment: AdminCommentComplaintType[];
};
const initialState: AdminCourseComplaintState = {
  adminCourse: [],
  adminComment: [],
};

export const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAdminCourseComplaintsThunk.fulfilled, (state, action) => {
      state.adminCourse = action.payload;
    });
    builder.addCase(getAdminCourseComplaintsThunk.rejected, (state, action) => {
      state.adminCourse = [];
    });
    builder.addCase(getAdminCommentComplaintsThunk.fulfilled, (state, action) => {
      state.adminComment = action.payload;
    });
    builder.addCase(getAdminCommentComplaintsThunk.rejected, (state, action) => {
      state.adminComment = [];
    });

    builder.addCase(setNeedToModerateFalseByAdminThunk.fulfilled, (state, action) => {
      console.log(state, 'AAAAAAAAAAAAAAAAAA');

      return {
        ...state,
        adminCourse: state.adminCourse.filter(
          (el) => Number(el.courseId) !== Number(action.payload),
        ),
      };
    });

    builder.addCase(setNeedToModerateCommentFalseByAdminThunk.fulfilled, (state, action) => {
      console.log(state, 'AAAAAAAAAAAAAAAAAA');

      return {
        ...state,
        adminComment: state.adminComment.filter(
          (el) => Number(el.commentId) !== Number(action.payload),
        ),
      };
    });

    builder.addCase(deleteCommentByAdminThunk.fulfilled, (state, action) => {
      console.log(state, 'AAAAAAAAAAAAAAAAAA');

      return {
        ...state,
        adminComment: state.adminComment.filter(
          (el) => Number(el.commentId) !== Number(action.payload),
        ),
      };
    });
    builder.addCase(deleteCourseByAdminThunk.fulfilled, (state, action) => {
      console.log(state, 'AAAAAAAAAAAAAAAAAA');

      return {
        ...state,
        adminCourse: state.adminCourse.filter(
          (el) => Number(el.courseId) !== Number(action.payload),
        ),
      };
    });

  //   builder.addCase(deleteAdminCourseComplaintThunk.fulfilled, (state, action) =>

  //   return {
  //     ...state,
  //     adminComment: state.adminComment.filter(
  //       (el) => Number(el.commentId) !== Number(action.payload),
  //     ),
  //   };
  // });

    
    //   state.filter((el) => el.id !== action.payload),
    // );
    // builder.addCase(deleteAdminCourseComplaintThunk.rejected, (state, action) => state);

    // builder.addCase(freezeAdminCourseComplaintThunk.fulfilled, (state, action) => action.payload);
    // builder.addCase(freezeAdminCourseComplaintThunk.rejected, (state, action) => state);
  },
});

export default adminSlice.reducer;
