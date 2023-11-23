import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import {
  getCompanyCoursesThunk,
  getCompanyInfoThunk,
} from '../../redux/slices/company/companyThunk';
import CompanyInfoCard from '../ui/companyUI/CompanyInfoCard';
import { getCourseThunk } from '../../redux/slices/course/courseThunk';

function CompanyPage(): JSX.Element {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const course = useAppSelector((store) => store.courses);

  useEffect(() => {
    dispatch(getCourseThunk(Number(id)));
  }, []);

  useEffect(() => {
    if (course[0]?.Company.userId !== undefined) {
      dispatch(getCompanyInfoThunk(course[0]?.Company.userId));
      dispatch(getCompanyCoursesThunk(course[0]?.companyId));
    }
  }, [course]);
  const company = useAppSelector((store) => store.company.companies);
  const courses = useAppSelector((store) => store.company.companyCourses);

  return (
    <>
      <CompanyInfoCard key={company[0]?.id} company={company[0]} courses={courses} />
    </>
  );
}

export default CompanyPage;
