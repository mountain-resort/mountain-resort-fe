import React from 'react';

interface DescriptionType {
  title?: string;
  subTitle?: string;
  content?: string;
  compo?: React.ReactNode;
}

const PageDescription = ({
  title,
  subTitle,
  content,
  compo,
}: DescriptionType) => {
  return (
    <div className='bg-primary-white'>
      {compo ? (
        compo
      ) : (
        <div className='px-[16px] py-[40px] flex flex-col gap-[40px]'>
          {title && <div className='text-md'>{title}</div>}
          <div className='flex flex-col gap-[17px] font-sans'>
            {subTitle && <div className='text-xs'>{subTitle}</div>}
            {content && <div className='text-2xs'>{content}</div>}
          </div>
        </div>
      )}
    </div>
  );
};

export default PageDescription;
