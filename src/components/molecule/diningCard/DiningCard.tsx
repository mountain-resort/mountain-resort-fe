import TextBox from '@/components/atom/TextBox';
import assets from '@/variables/images';
import { cva } from 'class-variance-authority';
import Image from 'next/image';
import React from 'react';

interface DiningCardProps {
  type: 'on-site' | 'off-site';
  img?: string;
  alt?: string;
  title?: string;
  subTitle?: string;
  content?: string;
  contact?: string;
}

const imageWrapper = cva(['min-h-[255px]', 'relative']);
const flexCol = cva(['flex', 'flex-col', 'items-center']);
const gapVariants = cva(flexCol(), {
  variants: {
    gap: {
      small: 'gap-1',
      medium: 'gap-[9px]',
      large: 'gap-6',
    },
  },
});
const borderVariants = cva('border border-solid', {
  variants: {
    border: {
      gold: 'w-[51px] border-primary-gold',
      gray: 'w-[234px] border-[0.5px] border-transparent border-t-primary-gray/50',
    },
  },
});
const contentWrapper = cva('px-[27px] py-[31px] font-sans', {
  variants: {
    onSite: {
      true: gapVariants({ gap: 'medium' }),
      false: gapVariants({ gap: 'large' }),
    },
  },
});
const buttonWrapper = cva('', {
  variants: {
    onSite: {
      true: '',
      false: borderVariants({ border: 'gray' }),
    },
  },
});

const DiningCard = ({
  type,
  img,
  alt,
  title,
  subTitle,
  content,
  contact,
}: DiningCardProps) => {
  const isOnSite = type === 'on-site';

  return (
    <div>
      <div className={imageWrapper()}>
        <Image
          src={img ?? assets.images.dining03RoomService}
          alt={alt ?? 'Dining image'}
          fill
          className='object-cover'
        />
      </div>
      <div className={contentWrapper({ onSite: isOnSite })}>
        <div className={gapVariants({ gap: 'large' })}>
          <div className={gapVariants({ gap: 'small' })}>
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
          <div className={borderVariants({ border: 'gold' })}></div>
          <div className='min-h-[80px]'>
            {content && <TextBox text={content} size='text-3xs' />}
          </div>
        </div>
        <div className={buttonWrapper({ onSite: isOnSite })}>
          {isOnSite && <button className={'h-[42px]'}>LEARN MORE</button>}
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
