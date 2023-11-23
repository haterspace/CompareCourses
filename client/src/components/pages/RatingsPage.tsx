import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { CourseType } from '../../types/courseType';
import { useAppDispatch } from '../../redux/hooks';
import { addRatingThunk } from '../../redux/slices/ratings/RatingsThunks';
type StarRatingPropsType = {
  course: CourseType;
};
export default function StarRating({ course }: StarRatingPropsType): JSX.Element {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const dispatch = useAppDispatch();
  return (
    <div>
      <p>оцени курс:</p>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <label style={{marginRight: '5px'}} key={`lanel${ratingValue}`}>
            <input
              key={`input${ratingValue}`}
              type="radio"
              name="rating"
              style={{ display: 'none'}}
              value={ratingValue}
              onClick={() => {
                setRating(ratingValue);
                dispatch(addRatingThunk({ formData: { rate: ratingValue }, courseId: course.id }));
              }}
            />
            <FaStar
              key={`fastar${ratingValue}`}
              className="star"
              color={ratingValue <= (hover || rating) ? '#ffc107' : '#e4e5e9'}
              size={20}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(0)}
            />
          </label>
        );
      })}
    </div>
  );
}
