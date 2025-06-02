import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { ICartItem } from 'types/product';
import { addOrUpdateCart, deleteCart, getCart } from 'apis/firebase';
import { useAuth } from 'context/AuthContext';

export const useCart = () => {
  const queryClient = useQueryClient();
  const { user } = useAuth();

  const cartQuery = useQuery({
    queryKey: ['cart', user?.uid],
    queryFn: () => getCart(user?.uid || ''),
    enabled: !!user?.uid,
  });

  const addOrUpdateCartItem = useMutation({
    mutationFn: (cartItem: ICartItem) =>
      addOrUpdateCart(user?.uid || '', cartItem),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cart', user?.uid] });
    },
  });

  const deleteCartItem = useMutation({
    mutationFn: (cartId: string) => deleteCart(user?.uid || '', cartId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cart', user?.uid] });
    },
  });

  return { cartQuery, addOrUpdateCartItem, deleteCartItem };
};
