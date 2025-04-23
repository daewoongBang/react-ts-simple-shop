interface BannerProps {
  imageUrl: string;
  title: string;
  subTitle: string;
}

const Banner = ({ imageUrl, title, subTitle }: BannerProps) => {
  return (
    <section className='h-96 relative bg-yellow-900'>
      <div className='w-full h-full bg-cover bg-main-banner opacity-80' />

      <div className='absolute w-full top-32 text-center text-gray-50 drop-shadow-2xl'>
        <h1 className='text-6xl font-semibold'>{title}</h1>
        <p className='text-2xl'>{subTitle}</p>
      </div>
    </section>
  );
};

export default Banner;
