interface BookingInfoItemProps {
  label: string;
  value: string;
}

const BookingInfoItem = ({ label, value }: BookingInfoItemProps) => {
  return (
    <div className='flex flex-col text-left text-3xs pc:text-xs gap-[6px]'>
      <span className='font-semibold'>{label}:</span>
      <p className='font-regular'>{value}</p>
    </div>
  );
};

export default BookingInfoItem;

