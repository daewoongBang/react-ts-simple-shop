import { BsFillPlusCircleFill } from 'react-icons/bs';
import { useAuth } from 'context/AuthContext';
import Loading from 'components/common/Loading';
import CartItem from 'components/cart/Item';
import PriceCard from 'components/cart/PriceCard';
import { FaEquals } from 'react-icons/fa';
import Button from 'components/common/Button';
import { useCart } from 'hooks/useCart';

const DELIVERY_FEE = 3000;

const MyCart = () => {
  const { user } = useAuth();
  const {
    cartQuery: { isLoading, data: cartItems },
  } = useCart();

  const totalPrice =
    cartItems?.reduce((prev, item) => {
      return prev + item.price * item.quantity;
    }, 0) || 0;

  return isLoading ? (
    <Loading />
  ) : (
    <section className='p-8 flex flex-col'>
      <h1 className='text-2xl text-center font-bold pb-4 border-b border-gray-300'>
        내 장바구니
      </h1>

      {cartItems && cartItems.length > 0 ? (
        <>
          <ul className='border-b border-gray-300 mb-8 p-4 px-8'>
            {cartItems.map((item) => (
              <CartItem
                key={`cart-item-${item.id}`}
                item={item}
                uid={user?.uid || ''}
              />
            ))}
          </ul>

          <div className='flex justify-between items-center mb-4 px-2 md:px-8 lg:px-16'>
            <PriceCard text='총 가격' price={totalPrice} />
            <BsFillPlusCircleFill className='shrink-0' />
            <PriceCard text='배송비' price={DELIVERY_FEE} />
            <FaEquals className='shrink-0' />
            <PriceCard text='총 결제 금액' price={totalPrice + DELIVERY_FEE} />
          </div>

          <Button>주문하기</Button>
        </>
      ) : (
        <p>장바구니가 비었습니다.</p>
      )}
    </section>
  );
};

export default MyCart;
