import React from 'react';

import TextBox from '@/components/atoms/TextBox';

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
        <div className='px-4 py-10 flex flex-col gap-10'>
          {title && <TextBox text={title} />}
          <div className='flex flex-col gap-[17px] font-sans'>
            {subTitle && <TextBox text={subTitle} size='text-xs' />}
            {content && <TextBox text={content} size='text-2xs' />}
          </div>
        </div>
      )}
    </div>
  );
};

export default PageDescription;
