import { Product } from 'types/product';

interface ProductItemProps {
  product: Product;
}

const ProductItem = ({
  product: { id, image, title, price, category },
}: ProductItemProps) => {
  return (
    <li className='rounded-lg overflow-hidden shadow-md cursor-pointer'>
      <img className='w-full' src={image} alt={title} />

      <div className='p-2'>
        <div className='flex items-center justify-between text-lg'>
          <h3 className='truncate'>{title}</h3>
          <p>{`￦${price}`}</p>
        </div>
        <p className='text-sm text-gray-500'>{category}</p>
      </div>
    </li>
  );
};

export default ProductItem;
