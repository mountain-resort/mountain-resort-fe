export default function Home() {
  return (
    // 기본 폰트 lora, open sans 쓸 때만 font-sans 주면 됨. 
    // Primary - MR_white, black, gold / Secondary - dark_grey, light_grey
    // fontSize - xl : 72px, 2lg: 48px, lg: 32px, md: 24px, sm: 18px, xs: 16px
    // fontWeight - bold: 700, semibold: 600, medium: 500, regular: 400
    // screens - mobile: 375px, pc: 1440px
    <div className='bg-primary-gold'>
      <div className='underline p-10'>
        <h1 className='text-xl font-bold text-primary-black font-lora pc:text-sm'>
          This is Landing page
        </h1>
        <h1 className='text-2lg text-secondary-light_grey font-regular font-sans pc:text-md'>
          This is Landing page
        </h1>
      </div>
      <h1 className='pc:text-xl'> This is Landing page </h1>
    </div>
  );
}
