import TextBox from '@/components/atoms/TextBox';
import Button from '@/components/atoms/button/Button';
import Image from 'next/image';
import assets from '@/variables/images';
import { cva } from 'class-variance-authority';

interface AccommodationCardProps {
  name: string;
  description?: string;
  images: string[];
}

const styles = {
  card: cva('w-full bg-white overflow-hidden h-[360px] md:h-[501px]'),
  imageWrapper: cva('relative min-h-48 md:min-h-60'),
  content: cva('font-sans px-6 py-4 md:px-8 md:py-6'),
  textContainer: cva('flex flex-col items-center text-center gap-6'),
  buttonContainer: cva(
    'flex justify-center items-center w-full space-x-4 md:space-x-7 mt-5 md:mt-6',
  ),
  separatorLine: cva(
    'border-t-2 border-primary-gold border-solid w-[51px] hidden md:block',
  ),
};

const buttonStyles = cva('h-[35px] md:h-[43px] text-[14px]');

const AccommodationCard = ({
  name,
  description,
  images,
}: AccommodationCardProps) => {
  const imageSrc =
    images[0] ?? assets.images.accommodation01FamilyFriendlyCabin;

  return (
    <div className={styles.card()}>
      <div className={styles.imageWrapper()}>
        <Image
          src={imageSrc}
          alt='랜딩페이지에 들어가는 숙박카드'
          fill
          className='object-cover'
        />
      </div>

      <div className={styles.content()}>
        <div className={styles.textContainer()}>
          <TextBox
            text={name}
            weight='font-semibold'
            size='text-base md:text-lg'
            otherStyle='font-lora'
          />

          <div className={styles.separatorLine()}></div>

          {description && (
            <TextBox
              text={description}
              size='text-xs md:text-sm'
              otherStyle='text-primary-gray line-clamp-2 md:line-clamp-none'
            />
          )}
        </div>

        <div className={styles.buttonContainer()}>
          <Button variant='primary' className={buttonStyles()}>
            ROOM DETAILS
          </Button>
          <Button
            variant='primary'
            className={`${buttonStyles()} hidden md:flex`}
          >
            CHECK RATE
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AccommodationCard;

