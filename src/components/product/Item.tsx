import { useNavigate } from 'react-router-dom';
import { formatPrice } from 'util/format';
import { Product } from 'types/product';

interface ProductItemProps {
  product: Product;
}

const ProductItem = ({ product }: ProductItemProps) => {
  const { id, image, title, price, category } = product;

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/products/${id}`, { state: { product } });
  };

  return (
    <li
      className='rounded-lg overflow-hidden shadow-md cursor-pointer transition-all duration-300 hover:scale-105'
      onClick={handleClick}
    >
      <img className='w-full' src={image} alt={title} />

      <div className='p-2'>
        <div className='flex items-center justify-between text-lg'>
          <h3 className='truncate'>{title}</h3>
          <p className='whitespace-nowrap'>{formatPrice(price)}</p>
        </div>
        <p className='text-sm text-gray-500'>{category}</p>
      </div>
    </li>
  );
};

export default ProductItem;
