import { useQuery } from '@tanstack/react-query';
import { getCart } from 'apis/firebase';
import { IoCartOutline } from 'react-icons/io5';
import { useAuth } from 'context/AuthContext';
const CartStatus = () => {
  const { user } = useAuth();

  const { data: cartItems } = useQuery({
    queryKey: ['carts'],
    queryFn: () => getCart(user?.uid || ''),
  });

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
