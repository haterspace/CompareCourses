import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import CoursesList from '../ui/CourseUI/CoursesList';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { getCoursesThunk } from '../../redux/slices/course/courseThunk';
import { getLikedCoursesThunk } from '../../redux/slices/likes/likedCoursesThunk';
import { Button, Container, Pagination, TextField } from '@mui/material';
import apiService from '../../services/config';
import FilterComponentHomePage from '../ui/CourseUI/FilterComponentHomePage';
import SearchCoursesList from '../ui/CourseUI/SearchCoursesList';
import FilteredCourseList from '../ui/CourseUI/FilteredCourseList';
import { CourseType } from '../../types/courseType';
import { findCourse } from '../../services/courseService';

function HomePage(): JSX.Element {
  //просто получить курсы
  const dispatch = useAppDispatch();
  const courses = useAppSelector((store) => store.courses);
  const [page, setPage] = useState(1); //страница нужная
  const [selected, setSelected] = useState(''); // каитегория - проф\хард\софт
  const [filteredDisplayData, setFilteredDisplayData] = useState(courses); // данные, которые отправляются в страницу фильтрованных курсов
  const [filteredData, setFilteredData] = useState(courses); //данные которые мы меняем по селектору, и изменяем стейт выше(это нужно чтобы, аджаксово отработало, скорее всего хуйня, но че поделать)
  const [searchResults, setSearchResults] = useState<CourseType[]>([]); // здесь будет массив с совпадениями из инпута

  const [count, setCount] = useState(0);
  // //!логика поиска START

  const [term, setTerm] = useState('');
  const findClick = async () => {
    try {
      const result = await findCourse(term);
      setSearchResults(result);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
    setTerm('');
  };
  // //!логика поиска FINISH

  //!ЛОГИКА ПАГИНАЦИИ СТАРТ
  useEffect(() => {
    if (filteredDisplayData.length === 0) {
      dispatch(getCoursesThunk(page));
      dispatch(getLikedCoursesThunk());
    }
  }, [page]); // по изменению страницы, получаем нужные данные
  //меняем страницу по клику
  useEffect(() => {
    dispatch(getCoursesThunk(page));
  }, []);

  const handleChange = (event: ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  //!ЛОГИКА ПАГИНАЦИИ ФИНИШ

  //!ЛОГИКА ФИЛЬТРАЦИИ СТАРТ
  useEffect(() => {
    // console.log('a');

    if (selected === '' || selected === 'all') {
      setFilteredData([]);
      setCount(5);
      setSearchResults([]);
    } else {
      apiService.post(`/filter/${page}`, { selected }).then((res) => {
        setFilteredData(res.data);
        setCount(2);
        setSearchResults([]);
      });
    }
  }, [selected, page]); //получаем нужные данные если селектор изменился

  const choiseHandler = (e: React.ChangeEvent<{ value: string }>) => {
    setSelected(e.target.value);
  }; //ставим нужный селектор

  useEffect(() => {
    // if (selected.length !== 0) {
    if (filteredData.length <= 6) {
      setFilteredDisplayData(filteredData);
    } else {
      setFilteredDisplayData(filteredData.slice((page - 1) * 6, page * 6));
    }
    // }
  }, [filteredData]); // по данных меняем данные для отображения
  //!ЛОГИКА ФИЛЬТРАЦИИ ФИНИШ

  return (
    <>
      <div className="offer">
        <div className="filter">&nbsp;</div>
        <Container>
          <div className="inner">
            <h1>Лучшие онлайн-курсы от лучших школ и авторов на compareCourses</h1>
            <h4>
              Мы предоставляем доступ к самым эффективным курсам, которые можно сравнить по отзывам
              учеников
            </h4>
            <a className="record" href="#search">
              Найти курс
            </a>
          </div>
        </Container>
      </div>
      <Container>
        <div id="search">
          <FilterComponentHomePage choiseHandler={choiseHandler} selected={selected} />
          <div className="searchbox">
            <TextField
              type="input"
              placeholder="Найти курс"
              onChange={(e) => setTerm(e.target.value)}
              value={term}
            />
            <Button
              onClick={() => {
                findClick();
              }}
            >
              Найти
            </Button>
          </div>
        </div>
      </Container>

      {searchResults.length !== 0 ? (
        <div>
          {searchResults.length !== 0 && <SearchCoursesList searchResults={searchResults} />}
        </div>
      ) : (
        <div>
          {filteredDisplayData.length !== 0 ? (
            <div>
              <FilteredCourseList filteredCourses={filteredDisplayData} />
            </div>
          ) : (
            <div>
              <CoursesList />
            </div>
          )}
        </div>
      )}
      <Pagination className="doter" count={count} page={page} onChange={handleChange} />
    </>
  );
}

export default HomePage;
