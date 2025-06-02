import { IoCartOutline } from 'react-icons/io5';
import { useCart } from 'hooks/useCart';

const CartStatus = () => {
  const {
    cartQuery: { data: cartItems },
  } = useCart();

  return (
    <div className='relative'>
      <IoCartOutline className='text-4xl' />
      {cartItems && (
        <p className='w-6 h-6 flex items-center justify-center bg-brand text-white font-bold rounded-full absolute -top-1 -right-3'>
          {cartItems.length}
        </p>
      )}
    </div>
  );
};

export default CartStatus;
