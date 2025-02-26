import Image from 'next/image';
import assets from '@/variables/images';

interface StarIconProps {
  width?: number;
  height?: number;
  alt?: string;
}

const StarIcon = ({ width = 20, height = 20, alt = 'Star' }: StarIconProps) => {
  return (
    <Image
      src={assets.icons.reviewStar}
      alt={alt}
      width={width}
      height={height}
    />
  );
};

export default StarIcon;
