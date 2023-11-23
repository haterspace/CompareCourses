import React, { useEffect } from 'react';
import ComplaintCommentCard from './ComplaintCommentCard';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { getAdminCommentComplaintsThunk } from '../../../redux/slices/admin/AdminThunks';

export default function ComplaintCommentList() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAdminCommentComplaintsThunk());
  },[]);

  const adminCommentComplaints = useAppSelector(
    (store) => store.adminCourseComplaints.adminComment,
  );

  return (
    <>
      {adminCommentComplaints.map((commentComplaint) => (
        <ComplaintCommentCard commentComplaint={commentComplaint} key={commentComplaint.id} />
      ))}
    </>
  );
}
