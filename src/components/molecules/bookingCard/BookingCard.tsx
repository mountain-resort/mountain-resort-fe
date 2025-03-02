import TextBox from '@/components/atoms/TextBox';
import Button from '@/components/atoms/button/Button';
import Image from 'next/image';
import assets from '@/variables/images';

interface BookingCardProps {
  name: string;
  images: string[];
  occupancy: string[];
  size: string[];
  bedding: [string, number][];
  price: number;
}

const BookingCard = ({
  name,
  images,
  occupancy,
  size,
  bedding,
  price,
}: BookingCardProps) => {
  const imageSrc =
    images[0] ?? assets.images.accommodation01FamilyFriendlyCabin;

  return (
    <div className='w-full bg-white h-auto flex flex-col pc:flex-row border border-black border-solid pc:h-[375px]'>
      <div className='relative w-full h-[189px] pc:w-1/2 pc:h-[375px] pc:flex-shrink-0 border-b-2 border-gray-300 pc:border-b-0'>
        <Image src={imageSrc} alt={name} fill className='object-cover' />
      </div>

      <div className='flex flex-col w-full px-4 pt-6 pb-4 pc:px-8 pc:py-6 pc:w-1/2 min-h-[255px] pc:h-auto'>
        <TextBox
          text={name}
          otherStyle='font-semibold border-b border-gray-400 pb-2 underline pl-[12px] text-[17px] pc:text-[22px] text-center pc:text-left'
        />

        <div className='flex justify-between w-full px-4 mt-6 pc:mt-[34px] h-[63px] pc:h-[60px]'>
          <div className='flex flex-col text-left text-[clamp(11px,3vw,16px)] pc:text-sm gap-[6px]'>
            <span className='font-semibold'>Occupancy:</span>
            <p>{occupancy.join(', ')}</p>
          </div>

          <div className='flex flex-col text-left text-[clamp(11px,3vw,16px)] pc:text-sm gap-[6px]'>
            <span className='font-semibold'>Size:</span>
            <p>{size.join(', ')}</p>
          </div>

          <div className='flex flex-col text-left text-[clamp(11px,3vw,16px)] pc:text-sm gap-[6px]'>
            <span className='font-semibold'>Bedding:</span>
            {bedding.map(([bedType, count], index) => (
              <p key={`${bedType}-${count}-${index}`}>
                {bedType} X {count}
              </p>
            ))}
          </div>
        </div>

        <div className='border-t-2 border-gray-300 border-solid w-full mt-6 pc:mt-[28px]'></div>

        <div className='flex justify-between items-center w-full px-4 mt-6 pc:mt-[31px] h-[73px]'>
          <span className='text-[clamp(10px,3vw,15px)] pc:text-base'>
            Price per night
          </span>
          <span className='text-[clamp(14px,3vw,19px)] pc:text-lg font-bold flex items-center'>
            <span className='text-[clamp(13px,3vw,18px)] pc:text-sm mr-2'>
              AUD
            </span>
            {price}
          </span>
        </div>

        <Button variant='primary' className='mt-4'>
          BOOK NOW
        </Button>
      </div>
    </div>
  );
};

export default BookingCard;

