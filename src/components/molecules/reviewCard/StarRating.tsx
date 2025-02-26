import StarIcon from '@/components/atoms/StarIcon';

interface StarRatingProps {
  starNumber?: number;
}

const StarRating = ({ starNumber = 0 }: StarRatingProps) => {
  const getStars = (rating: number) => {
    const length = Math.max(1, Math.min(5, Math.floor(rating)));
    console.log(length);
    return Array.from({ length: length }, (_, i) => (
      <StarIcon key={`full-${i}`} />
    ));
  };

  return <div className='flex'>{getStars(starNumber)}</div>;
};

export default StarRating;
