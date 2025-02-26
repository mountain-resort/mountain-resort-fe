import TextBox from '@/components/atoms/TextBox';
import React from 'react';
import StarRating from './StarRating';

export enum Type {
  PREVIEW = 'preview',
  DETAIL = 'detail',
}

interface Props {
  type: Type;
  title: string;
  star: number;
  content: string;
  reviewer: string;
}

const ReviewCard = ({
  type = Type.PREVIEW,
  title,
  star,
  content,
  reviewer,
}: Props) => {
  return (
    <div className='w-full h-full'>
      <div
        className={`rounded-md ${
          type === Type.PREVIEW ? 'bg-white/10' : 'bg-primary-black'
        }`}
      >
        <div className='px-8 py-6 flex flex-col gap-6 items-center text-center font-Lara'>
          <TextBox text={`"${title}"`} size='text-2xs pc:text-sm' />
          <StarRating starNumber={star} />
          <TextBox
            text={`"${content}"`}
            size='text-3xs pc:text-sm'
            otherStyle='font-sans'
          />
          <TextBox
            text={`by ${reviewer}`}
            size='text-xs pc:text-sm'
            weight='font-bold'
            otherStyle='font-sans'
          />
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
