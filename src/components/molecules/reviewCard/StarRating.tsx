import Image from 'next/image';
import assets from '@/variables/images';

interface StarRatingProps {
  starNumber?: number;
}

const StarRating = ({ starNumber = 0 }: StarRatingProps) => {
  const length = Math.max(1, Math.min(5, Math.floor(starNumber)));

  return (
    <div className='flex'>
      {Array.from({ length }, (_, i) => (
        <Image
          key={`${i}`}
          src={assets.icons.reviewStar}
          alt='star'
          width={20}
          height={20}
        />
      ))}
    </div>
  );
};

export default StarRating;
