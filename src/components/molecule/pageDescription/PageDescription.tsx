import TextBox from '@/components/atom/TextBox';
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
          {title && <TextBox text={title} />}
          <div className='flex flex-col gap-[17px] font-sans'>
            {subTitle && <TextBox text={subTitle} size='text-xs'/>}
            {content && <TextBox text={content} size='text-2xs'/>}
          </div>
        </div>
      )}
    </div>
  );
};

export default PageDescription;
