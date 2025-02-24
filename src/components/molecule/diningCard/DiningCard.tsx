import TextBox from '@/components/atom/TextBox';
import assets from '@/variables/images';
import cn from '@/utils/cn';
import { cva } from 'class-variance-authority';
import Image from 'next/image';
import React from 'react';

interface DiningCardType {
  type: 'on-site' | 'off-site';
  img?: string;
  title?: string;
  subTitle?: string;
  content?: string;
  contact?: string;
}

const imageWrapper = cva(['h-[255px]', 'relative']);
const flexCol = cva(['flex', 'flex-col', 'items-center']);
const DivVariants = cva(``, {
  variants: {
    gap: {
      small: cn(flexCol(), 'gap-1'),
      medium: cn(flexCol(), 'gap-[9px]'),
      large: cn(flexCol(), 'gap-6'),
    },
    border: {
      gold: 'w-[51px] border border-primary-gold border-solid',
      gray: 'w-[234px] border border-primary-gray border-solid',
    },
  },
});
const contentWrapper = cva(
  cn(DivVariants({ gap: 'medium' }), ['px-[27px]', 'py-[31px]', 'font-sans']),
);

const DiningCard = ({
  type,
  img,
  title,
  subTitle,
  content,
  contact,
}: DiningCardType) => {
  const isOnSite = type === 'on-site';

  return (
    <div>
      <div className={imageWrapper()}>
        <Image
          src={img ?? assets.images.dining03RoomService}
          alt='dining03RoomService'
          fill
          className='object-cover'
        />
      </div>
      <div className={cn(contentWrapper(), !isOnSite && 'gap-6')}>
        <div className={DivVariants({ gap: 'large' })}>
          <div className={DivVariants({ gap: 'small' })}>
            {title && (
              <TextBox
                text={title}
                weight='font-semibold'
                size='text-sm'
                etc='font-lora'
              />
            )}
            {subTitle && (
              <TextBox
                text={subTitle}
                size='text-3xs'
                etc='text-primary-gray'
              />
            )}
          </div>
          <div className={DivVariants({ border: 'gold' })}></div>
          <div className='h-[80px]'>
            {content && <TextBox text={content} size='text-3xs' />}
          </div>
        </div>
        <div className={cn(!isOnSite && DivVariants({ border: 'gray' }))}>
          <button className={cn('h-[42px]', !isOnSite && 'hidden')}>
            LEARN MORE
          </button>
        </div>
        {contact && (
          <div className={flexCol()}>
            <TextBox text='CONTACT US TO BOOK TABLE' size='text-3xs' />
            <TextBox text={contact} size='text-3xs' />
          </div>
        )}
      </div>
    </div>
  );
};

export default DiningCard;
