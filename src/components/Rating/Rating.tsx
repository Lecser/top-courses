import clsx from 'clsx';
import { HTMLAttributes, KeyboardEvent, useEffect, useState } from 'react';
import StarIcon from '../../../public/images/starIcon.svg';
import cls from './Rating.module.css';

interface RatingProps extends HTMLAttributes<HTMLDivElement> {
  isEditable?: boolean;
  rating: number;
  setRating?: (rating: number) => void;
}

export const Rating = (props: RatingProps): JSX.Element => {
  console.log('render');
  const { isEditable = false, rating, setRating, ...restProps } = props;
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

  const changeDisplay = (i: number): void => {
    if (!isEditable) return;
    constructRating(i);
  };

  const handleClick = (i: number): void => {
    if (!isEditable || setRating === undefined) return;
    setRating(i);
  };

  const handleSpace = (i: number, e: KeyboardEvent<SVGElement>): void => {
    if (e.key !== ' ' || setRating === undefined) return;
    setRating(i);
  };

  const constructRating = (currentRating: number): void => {
    const updatedArray = ratingArray.map((_, i: number) => {
      return (
        <span
          key={i}
          className={clsx(cls.star, {
            [cls.filled]: i < currentRating,
            [cls.isEditable]: isEditable
          })}
          onClick={() => {
            handleClick(i + 1);
          }}
          onMouseEnter={() => {
            changeDisplay(i + 1);
          }}
          onMouseLeave={() => {
            changeDisplay(rating);
          }}
        >
          <StarIcon
            tabIndex={isEditable ? 0 : -1}
            onKeyDown={(e: KeyboardEvent<SVGElement>) => {
              isEditable && handleSpace(i + 1, e);
            }}
          />
        </span>
      );
    });
    setRatingArray(updatedArray);
  };

  useEffect(() => {
    constructRating(rating);
  }, [rating]);

  return (
    <div {...restProps}>
      {ratingArray.map((r, i) => (
        <span key={i}>{r}</span>
      ))}
    </div>
  );
};
