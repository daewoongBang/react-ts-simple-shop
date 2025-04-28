import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Button from 'components/common/Button';
import Select from 'components/common/Select';
import { formatPrice } from 'util/format';
import { Product } from 'types/product';

const ProductDetail = () => {
  const {
    product: { image, title, price, category, description, options },
  } = useLocation().state as { product: Product };

  const [selectedOption, setSelectedOption] = useState(
    options ? options?.[0] : ''
  );

  const handleChangeOption = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setSelectedOption(e.target.value);

  const handleAddCart = () => {
    console.log(selectedOption);
  };

  return (
    <>
      <p className='ml-4 mt-4 text-sm text-gray-700'>{`> ${category}`}</p>

      <section className='flex flex-col md:flex-row gap-8 justify-center p-4'>
        <div className='w-full basis-7/12'>
          <img className='w-full' src={image} alt={title} />
        </div>

        <div className='w-full basis-5/12 flex flex-col gap-4'>
          <h1 className='text-3xl font-bold'>{title}</h1>
          <p className='text-2xl font-bold'>{formatPrice(price || 0)}</p>

          <p className='text-sm border-t pt-4'>{description}</p>

          <div className='flex gap-2 items-center'>
            <label
              htmlFor='option'
              className='font-bold text-brand whitespace-nowrap'
            >
              옵션:
            </label>
            <Select
              id='option'
              options={options?.map((option) => ({
                label: option,
                value: option,
              }))}
              defaultValue={selectedOption}
              onChange={handleChangeOption}
            />
          </div>

          <Button onClick={handleAddCart}>장바구니에 추가</Button>
        </div>
      </section>
    </>
  );
};

export default ProductDetail;
