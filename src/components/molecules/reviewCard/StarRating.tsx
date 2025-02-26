import StarIcon from '@/components/atoms/StarIcon';

interface StarRatingProps {
  starNumber?: number;
}

const StarRating = ({ starNumber = 0 }: StarRatingProps) => {
  const getStars = (rating: number) => {
    return Array.from({ length: Math.floor(rating) }, (_, i) => (
      <StarIcon key={`full-${i}`} />
    ));
  };

  return <div className='flex'>{getStars(starNumber)}</div>;
};

export default StarRating;
