import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

import { createProduct, getProducts } from 'apis/firebase';

interface Product {
  title: string;
  price: number;
  category: string;
  description: string;
  options: string;
}

export default function useProducts() {
  const queryClient = useQueryClient();

  const productsQuery = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
    staleTime: 1000 * 60 * 5,
  });

  const addProduct = useMutation({
    mutationFn: ({ product, url }: { product: Product; url: string }) =>
      createProduct(product, url),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['products'] }),
  });

  return { productsQuery, addProduct };
}
