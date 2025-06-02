import { ICartItem } from 'types/product';
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai';
import { RiDeleteBinLine } from 'react-icons/ri';
import { useCart } from 'hooks/useCart';

interface CartItemProps {
  item: ICartItem;
  uid: string;
}

const ICON_CLASS =
  'cursor-pointer transition-all hover:text-brand hover:scale-110 mx-1';

const CartItem = ({ item, uid }: CartItemProps) => {
  const { addOrUpdateCartItem, deleteCartItem } = useCart();

  const handleClickMinus = () => {
    if (item.quantity < 2) return;
    addOrUpdateCartItem.mutate({ ...item, quantity: item.quantity - 1 });
  };

  const handleClickPlus = () => {
    addOrUpdateCartItem.mutate({ ...item, quantity: item.quantity + 1 });
  };

  const handleClickDelete = () => {
    deleteCartItem.mutate(item.id);
  };

  return (
    <li className='flex justify-between items-center my-2'>
      <img
        className='w-24 md:w-48 rounded-lg'
        src={item.image}
        alt={item.title}
      />
      <div className='flex-1 flex justify-between ml-4'>
        <div className='basis-3/5'>
          <p className='text-lg'>{item.title}</p>
          <p className='text-xl font-bold text-brand'>{item.selectedOption}</p>
          <p>₩{item.price}</p>
        </div>
        <div className='flex items-center gap-2 text-2xl'>
          <AiOutlineMinusCircle
            className={ICON_CLASS}
            onClick={handleClickMinus}
          />
          <span>{item.quantity}</span>
          <AiOutlinePlusCircle
            className={ICON_CLASS}
            onClick={handleClickPlus}
          />
          <RiDeleteBinLine className={ICON_CLASS} onClick={handleClickDelete} />
        </div>
      </div>

      <p>{item.price}</p>
    </li>
  );
};

export default CartItem;
