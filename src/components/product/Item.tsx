import { Product } from 'types/product';

interface ProductItemProps {
  product: Product;
}

const ProductItem = ({
  product: { id, image, title, price, category },
}: ProductItemProps) => {
  return (
    <li className='rounded-lg overflow-hidden shadow-md cursor-pointer'>
      <img src={image} alt={title} />

      <div className='p-2'>
        <div className='flex justify-between'>
          <h3>{title}</h3>
          <p>{`￦${price}`}</p>
        </div>
        <p className='text-sm text-gray-500'>{category}</p>
      </div>
    </li>
  );
};

export default ProductItem;
