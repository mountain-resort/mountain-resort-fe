import React from 'react';

interface DescriptionType {
  title?: string;
  subTitle?: string;
  content?: string;
}

const PageDescription = ({ title, subTitle, content }: DescriptionType) => {
  return (
    <div className='bg-primary-white px-16 py-40 flex flex-col gap-[40px]'>
      {title && <div className='text-md'>{title}</div>}
      <div className='flex flex-col gap-[17px] font-sans'>
        {subTitle && <div className='text-xs'>{subTitle}</div>}
        {content && <div className='text-2xs'>{content}</div>}
      </div>
    </div>
  );
};

export default PageDescription;
