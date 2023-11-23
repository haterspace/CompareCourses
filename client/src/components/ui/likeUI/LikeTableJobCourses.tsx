import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { preferencesType } from './PreferencesModal';
import { Box } from '@mui/material';
import { LikedCourseType } from '../../../types/likedCoursesType';
import { CourseType } from '../../../types/courseType';
import { GradesJobType } from '../../../types/gradesType';

type LikeTableJobCoursesProps = {
  likedCourses: any;
  filters: preferencesType;
};
function LikeTableJobCourses({ likedCourses, filters }: LikeTableJobCoursesProps) {
  const courses = likedCourses.map((el: LikedCourseType) => el.Course);
  function findBestPrice(check: string) {
    const likedCoursesPrices = courses.map((el: CourseType) => el.price);
    return check === 'cheaper' ? Math.min(...likedCoursesPrices) : Math.max(...likedCoursesPrices);
  }
  console.log(likedCourses);

  function findBestDuration(check: string) {
    const likedCoursesDurations = courses.map((el: CourseType) => el.duration);
    return check === 'less'
      ? Math.min(...likedCoursesDurations)
      : Math.max(...likedCoursesDurations);
  }

  function findBestDiplom(check: string) {
    return courses
      .map((el: CourseType) => el.givesDiplom)
      .find((el: CourseType) => el.toString() === check);
  }

  function findBestSupport() {
    return Math.max(...likedCourses.map((el: GradesJobType) => el.support));
  }

  function findBestActualInfo() {
    return Math.max(...likedCourses.map((el: GradesJobType) => el.actualInfo));
  }

  function findBestPortfolio() {
    return Math.max(...likedCourses.map((el: GradesJobType) => el.portfolio));
  }

  function findBestSalary() {
    return Math.max(...likedCourses.map((el: GradesJobType) => el.salaryAverage));
  }
  const bestPrice = findBestPrice(filters.cost);
  const bestDuration = findBestDuration(filters.duration);
  const seen = new Set();
  const final = likedCourses.filter((item: any) => {
    const duplicate = seen.has(item.Course.id);
    seen.add(item.Course.id);
    return !duplicate;
  });
  return (
    <TableContainer component={Paper} style={{ margin: '0 0 3% 0' }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell
              component="th"
              scope="row"
              style={{ border: '1px solid black', fontSize: '15px', fontWeight: 'bold' }}
            >
              Название
            </TableCell>
            <TableCell
              component="th"
              scope="row"
              align="center"
              style={{ border: '1px solid black', fontSize: '15px', fontWeight: 'bold' }}
            >
              Формат
            </TableCell>
            <TableCell
              component="th"
              scope="row"
              align="center"
              style={{ border: '1px solid black', fontSize: '15px', fontWeight: 'bold' }}
            >
              Длительность
            </TableCell>
            <TableCell
              component="th"
              scope="row"
              align="center"
              style={{ border: '1px solid black', fontSize: '15px', fontWeight: 'bold' }}
            >
              Стоимость
            </TableCell>
            <TableCell
              component="th"
              scope="row"
              align="center"
              style={{ border: '1px solid black', fontSize: '15px', fontWeight: 'bold' }}
            >
              Выдача диплома гос образца
            </TableCell>
            <TableCell
              component="th"
              scope="row"
              align="center"
              style={{ border: '1px solid black', fontSize: '15px', fontWeight: 'bold' }}
            >
              Качество поддержки в поиске работы
            </TableCell>
            <TableCell
              component="th"
              scope="row"
              align="center"
              style={{ border: '1px solid black', fontSize: '15px', fontWeight: 'bold' }}
            >
              Оценка актуальности информации
            </TableCell>
            <TableCell
              component="th"
              scope="row"
              align="center"
              style={{ border: '1px solid black', fontSize: '15px', fontWeight: 'bold' }}
            >
              Качество поддержки в создании портфолио
            </TableCell>
            <TableCell
              component="th"
              scope="row"
              align="center"
              style={{ border: '1px solid black', fontSize: '15px', fontWeight: 'bold' }}
            >
              Средняя зарплата выпускников
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {final.map((course: GradesJobType) => (
            <TableRow
              key={course.Course?.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" style={{ border: '1px solid black' }}>
                {course.Course?.name}
              </TableCell>
              <TableCell
                component="th"
                scope="row"
                align="right"
                style={{ border: '1px solid black' }}
              >
                <Box
                  sx={{
                    color: course.Course?.format === filters.format ? 'green' : 'black',
                    fontWeight: course.Course?.format === filters.format ? 'bold' : 'normal',
                  }}
                >
                  {course.Course?.format}
                </Box>
              </TableCell>
              <TableCell
                component="th"
                scope="row"
                align="right"
                style={{ border: '1px solid black' }}
              >
                <Box
                  sx={{
                    color: course.Course?.duration === bestDuration ? 'green' : 'black',
                    fontWeight: course.Course?.duration === bestDuration ? 'bold' : 'normal',
                  }}
                >
                  {course.Course?.duration}м.
                </Box>
              </TableCell>
              <TableCell
                component="th"
                scope="row"
                align="right"
                style={{ border: '1px solid black' }}
              >
                <Box
                  sx={{
                    color: course.Course?.price === bestPrice ? 'green' : 'black',
                    fontWeight: course.Course?.price === bestPrice ? 'bold' : 'normal',
                  }}
                >
                  {course.Course?.price}
                </Box>
              </TableCell>
              <TableCell
                component="th"
                scope="row"
                align="right"
                style={{ border: '1px solid black' }}
              >
                <Box
                  sx={{
                    color:
                      course.Course?.givesDiplom === findBestDiplom(filters.givesDiplom)
                        ? 'green'
                        : 'black',
                    fontWeight:
                      course.Course?.givesDiplom === findBestDiplom(filters.givesDiplom)
                        ? 'bold'
                        : 'normal',
                  }}
                >
                  {course.Course?.givesDiplom ? 'Есть' : 'Нет'}
                </Box>
              </TableCell>
              <TableCell
                component="th"
                scope="row"
                align="right"
                style={{ border: '1px solid black' }}
              >
                <Box
                  sx={{
                    color: course.support === findBestSupport() ? 'green' : 'black',
                    fontWeight: course.support === findBestSupport() ? 'bold' : 'normal',
                  }}
                >
                  {course.support}/10
                </Box>
              </TableCell>
              <TableCell
                component="th"
                scope="row"
                align="right"
                style={{ border: '1px solid black' }}
              >
                <Box
                  sx={{
                    color: course.actualInfo === findBestActualInfo() ? 'green' : 'black',
                    fontWeight: course.actualInfo === findBestActualInfo() ? 'bold' : 'normal',
                  }}
                >
                  {course.actualInfo}/10
                </Box>
              </TableCell>
              <TableCell
                component="th"
                scope="row"
                align="right"
                style={{ border: '1px solid black' }}
              >
                <Box
                  sx={{
                    color: course.portfolio === findBestPortfolio() ? 'green' : 'black',
                    fontWeight: course.portfolio === findBestPortfolio() ? 'bold' : 'normal',
                  }}
                >
                  {course.portfolio}/10
                </Box>
              </TableCell>
              <TableCell
                component="th"
                scope="row"
                align="right"
                style={{ border: '1px solid black' }}
              >
                <Box
                  sx={{
                    color: course.salaryAverage === findBestSalary() ? 'green' : 'black',
                    fontWeight: course.salaryAverage === findBestSalary() ? 'bold' : 'normal',
                  }}
                >
                  {course.salaryAverage}р.
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default LikeTableJobCourses;
