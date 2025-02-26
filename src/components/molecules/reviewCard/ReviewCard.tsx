import TextBox from '@/components/atoms/TextBox';
import React from 'react';
import StarRating from './StarRating';

export enum PageType {
  LANDING = 'landing',
  DETAIL = 'detail',
}

interface DescriptionType {
  pageType: PageType;
  title: string;
  star: number;
  content: string;
  reviewer: string;
}

const ReviewCard = ({
  pageType,
  title,
  star,
  content,
  reviewer,
}: DescriptionType) => {
  return (
    <div className='w-full h-full'>
      <div
        className={` ${
          pageType === 'landing'
            ? 'bg-secondary-slate_gray'
            : 'bg-primary-black rounded-md'
        }`}
      >
        <div className='px-8 py-6 flex flex-col gap-6 items-center text-center font-Lara'>
          {title && (
            <TextBox text={`"${title}"`} size='mobile:text-2xs pc:text-sm' />
          )}
          {star >= 0 && <StarRating starNumber={star} />}
          {content && (
            <TextBox
              text={`"${content}"`}
              size='mobile:text-3xs pc:text-sm'
              otherStyle='font-sans'
            />
          )}
          {reviewer && (
            <TextBox
              text={`by ${reviewer}`}
              size='mobile:text-xs pc:text-sm'
              weight='font-bold'
              otherStyle='font-sans'
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
