import TextBox from '@/components/atoms/TextBox';
import Button from '@/components/atoms/button/Button';
import BookingInfoItem from '@/components/atoms/bookingInfoItem/BookingInfoItem';
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
    <div className='w-full bg-white flex flex-col pc:flex-row border border-black border-solid min-h-[444px] pc:min-h-[375px]'>
      <div className='relative w-full h-[189px] pc:w-1/2 pc:min-h-[375px] flex-shrink-0 border-b-2 border-gray-300 pc:border-b-0'>
        <Image src={imageSrc} alt={name} fill className='object-cover' />
      </div>

      <div className='flex flex-col w-full px-4 pt-[24px] pc:pt-[50px] pb-4 pc:px-8 pc:py-6 pc:w-1/2 min-h-[255px] pc:h-[375px]'>
        <TextBox
          text={name}
          size='text-2xs pc:text-[21.94px]'
          weight='font-medium'
          otherStyle='border-b border-gray-400 pb-2 underline pl-[12px] text-center pc:text-left'
        />

        <div className='flex justify-between w-full px-4 mt-[22px] pc:mt-[30px] h-[63px] pc:h-[60px]'>
          <BookingInfoItem label='Occupancy' value={occupancy.join(', ')} />
          <BookingInfoItem label='Size' value={size.join(', ')} />

          <div className='flex flex-col text-left text-3xs pc:text-xs gap-[6px]'>
            <span className='font-semibold'>Bedding:</span>
            {bedding.map(([bedType, count], index) => (
              <p key={`${bedType}-${count}-${index}`} className='font-regular'>
                {bedType} X {count}
              </p>
            ))}
          </div>
        </div>

        <div className='border-t-2 border-gray-300 border-solid w-full mt-[22px] pc:mt-[28px]'></div>

        <div className='flex justify-between items-center w-full px-4 mt-[22px] pc:mt-[25px] h-[75px]'>
          <span className='text-xs pc:text-base font-regular'>
            Price per night
          </span>
          <span className='text-2xs pc:text-[20px] font-bold flex items-center'>
            <span className='text-xs pc:text-xs mr-2'>AUD</span>
            {price}
          </span>
        </div>

        <Button variant='primary' className='mt-[11px] pc:mt-[10px]'>
          BOOK NOW
        </Button>

        <div className='mb-[24px] pc:mb-[20px]'></div>
      </div>
    </div>
  );
};

export default BookingCard;

