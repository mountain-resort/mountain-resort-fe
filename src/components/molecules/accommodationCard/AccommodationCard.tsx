import TextBox from '@/components/atoms/TextBox';
import Button from '@/components/atoms/button/Button';
import Image from 'next/image';
import assets from '@/variables/images';

interface AccommodationCardProps {
  name: string;
  description?: string;
  images: string[];
}

const styles = {
  card: 'w-full bg-white overflow-hidden h-[360px] pc:h-[501px]',
  imageWrapper: 'relative min-h-48 pc:min-h-60',
  content: 'font-sans px-6 py-4 pc:px-8 pc:py-6',
  textContainer: 'flex flex-col items-center text-center gap-6',
  buttonContainer:
    'flex justify-center items-center w-full space-x-4 pc:space-x-7 mt-5 pc:mt-6',
  separatorLine:
    'border-t-2 border-primary-gold border-solid w-[51px] hidden pc:block',
  buttonStyles: 'h-[35px] pc:h-[43px] text-[14px]',
};

const AccommodationCard = ({
  name,
  description,
  images,
}: AccommodationCardProps) => {
  const imageSrc =
    images[0] ?? assets.images.accommodation01FamilyFriendlyCabin;

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={imageSrc}
          alt='랜딩페이지에 들어가는 숙박카드'
          fill
          className='object-cover'
        />
      </div>

      <div className={styles.content}>
        <div className={styles.textContainer}>
          <TextBox
            text={name}
            weight='font-semibold'
            size='text-base pc:text-lg'
          />

          <div className={styles.separatorLine}></div>

          {description && (
            <TextBox
              text={description}
              size='text-xs pc:text-sm'
              otherStyle='text-primary-gray line-clamp-2 pc:line-clamp-none'
            />
          )}
        </div>

        <div className={styles.buttonContainer}>
          <Button variant='primary' className={styles.buttonStyles}>
            ROOM DETAILS
          </Button>
          <Button
            variant='primary'
            className={`${styles.buttonStyles} hidden pc:flex`}
          >
            CHECK RATE
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AccommodationCard;
