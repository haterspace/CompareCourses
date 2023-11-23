import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { getAdminCourseComplaintsThunk } from '../../../redux/slices/admin/AdminThunks';
import { AdminCourseComplaintType } from '../../../types/adminPageTypes';

type ComplaintCourseCardProps = {
  complaint: AdminCourseComplaintType;
};

export default function ComplaintCourseCard({ complaint }: ComplaintCourseCardProps) {
  const dispatch = useAppDispatch();
  // useEffect(() => {
  //   dispatch(getAdminCourseComplaintsThunk());
  // }, []);
  return (
    <div>
      <Card>
        <CardContent>
          <Typography variant="h3" gutterBottom>
            {complaint?.Course?.name}
          </Typography>
          <Typography variant="h4" component="div">
            {complaint.Course.desc}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
