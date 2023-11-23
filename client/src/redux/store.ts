import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/user/UserSlice';
import courseReducer from './slices/course/courseSlice';
import commentsReduce from './slices/comments/CommentsSlice';
import courseComplaintReducer from './slices/coursecomplaint/courseComplaintSlice';
import likesReducer from './slices/likes/likedCourseSlice';
import commentComplaintReducer from './slices/commentComplaint/CommentComplaintSlice';
import adminCourseComplaintsReducer from './slices/admin/AdminSlice';
import ratingsReducer from './slices/ratings/RatingsSlice';
import gradesJobReducer from './slices/grades/gradesSlice';
import gradesOtherReducer from './slices/grades/gradesOtherSlice';
import companyReducer from './slices/company/companySlice';
import modalReducer from './slices/modals/ModalSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    courses: courseReducer,
    likes: likesReducer,
    comments: commentsReduce,
    ratings: ratingsReducer,
    courseComplaints: courseComplaintReducer,
    commentComplaints: commentComplaintReducer,
    adminCourseComplaints: adminCourseComplaintsReducer,
    gradesJobs: gradesJobReducer,
    gradesOther: gradesOtherReducer,
    company: companyReducer,
    modal: modalReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
