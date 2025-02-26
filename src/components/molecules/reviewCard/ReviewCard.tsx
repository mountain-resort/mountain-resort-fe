import TextBox from '@/components/atoms/TextBox';
import React from 'react';

import StarRating from './StarRating';

interface DescriptionType {
  pageType: 'landing' | 'detail';
  title: string;
  star: number;
  content: string;
}

const ReviewCard = ({ pageType, title, star, content }: DescriptionType) => {
  return (
    <div className='flex justify-center items-center w-full h-full'>
      <div
        className={`p-4 rounded-lg ${
          pageType === 'landing' ? 'bg-secondary-slate_gray' : 'bg-gray-100'
        }`}
      >
        <div className='px-4 py-10 flex flex-col gap-10 items-center text-center'>
          {title && <TextBox text={title} />}
          {star && <StarRating starNumber={star} />}
          <div className='flex flex-col gap-[17px] font-sans'>
            {content && <TextBox text={content} size='text-2xs' />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
