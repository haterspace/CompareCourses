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
import { GradesOtherType } from '../../../types/gradesType';

type LikeTableOtherCoursesProps = {
  likedCourses: any;
  filters: preferencesType;
};
function LikeTableOtherCourses({ likedCourses, filters }: LikeTableOtherCoursesProps) {
  const arr = likedCourses.map((el: any) => el.Course);

  function findBestPrice(check: string) {
    const likedCoursesPrices = arr.map((el: any) => el.price);
    return check === 'cheaper' ? Math.min(...likedCoursesPrices) : Math.max(...likedCoursesPrices);
  }

  function findBestDuration(check: string) {
    const likedCoursesDurations = arr.map((el: any) => el.duration);
    return check === 'less'
      ? Math.min(...likedCoursesDurations)
      : Math.max(...likedCoursesDurations);
  }

  function findBestDiplom(check: string) {
    return arr.map((el: any) => el.givesDiplom).find((el: any) => el.toString() === check);
  }

  function findBestContent() {
    return Math.max(...likedCourses.map((el: any) => el.instructors));
  }

  function findBestPracticalTasks() {
    return Math.max(...likedCourses.map((el: any) => el.practicalTasks));
  }

  function findBestrealLifeApplication() {
    return Math.max(...likedCourses.map((el: any) => el.realLifeApplication));
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
              Оценка качества поданной информации в курсе
            </TableCell>
            <TableCell
              component="th"
              scope="row"
              align="center"
              style={{ border: '1px solid black', fontSize: '15px', fontWeight: 'bold' }}
            >
              Оценка практических заданий в курсе
            </TableCell>
            <TableCell
              component="th"
              scope="row"
              align="center"
              style={{ border: '1px solid black', fontSize: '15px', fontWeight: 'bold' }}
            >
              Оценка возможности применения информации из курса в жизни
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {final.map((course: any) => (
            <TableRow
              key={Math.random() * 1000000}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" style={{ border: '1px solid black' }}>
                {course.Course?.name}
              </TableCell>
              <TableCell
                component="th"
                scope="row"
                align="center"
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
                align="center"
                style={{ border: '1px solid black' }}
              >
                <Box
                  sx={{
                    color: course.Course?.duration === bestDuration ? 'green' : 'black',
                    fontWeight: course.Course?.duration === bestDuration ? 'bold' : 'normal',
                  }}
                >
                  {course.Course?.duration}
                </Box>
              </TableCell>
              <TableCell
                component="th"
                scope="row"
                align="center"
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
                align="center"
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
                align="center"
                style={{ border: '1px solid black' }}
              >
                <Box
                  sx={{
                    color: course.instructors === findBestContent() ? 'green' : 'black',
                    fontWeight: course.instructors === findBestContent() ? 'bold' : 'normal',
                  }}
                >
                  {course.instructors}/10
                </Box>
              </TableCell>
              <TableCell
                component="th"
                scope="row"
                align="center"
                style={{ border: '1px solid black' }}
              >
                <Box
                  sx={{
                    color: course.practicalTasks === findBestPracticalTasks() ? 'green' : 'black',
                    fontWeight:
                      course.practicalTasks === findBestPracticalTasks() ? 'bold' : 'normal',
                  }}
                >
                  {course.practicalTasks}/10
                </Box>
              </TableCell>
              <TableCell
                component="th"
                scope="row"
                align="center"
                style={{ border: '1px solid black' }}
              >
                <Box
                  sx={{
                    color:
                      course.realLifeApplication === findBestrealLifeApplication()
                        ? 'green'
                        : 'black',
                    fontWeight:
                      course.realLifeApplication === findBestrealLifeApplication()
                        ? 'bold'
                        : 'normal',
                  }}
                >
                  {course.realLifeApplication}/10
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default LikeTableOtherCourses;
