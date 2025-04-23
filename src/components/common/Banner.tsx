interface BannerProps {
  imageUrl: string;
  title: string;
  subTitle: string;
}

const Banner = ({ imageUrl, title, subTitle }: BannerProps) => {
  return (
    <div className='my-3 relative w-full h-[300px] overflow-hidden'>
      <img src={imageUrl} alt='banner' className='w-full h-full object-cover' />
      <div className='absolute inset-0 flex flex-col items-center justify-center bg-black/30'>
        <h1 className='text-white text-4xl font-bold'>{title}</h1>
        <p className='text-white text-xl'>{subTitle}</p>
      </div>
    </div>
  );
};

export default Banner;
