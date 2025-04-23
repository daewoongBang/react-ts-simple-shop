import { useQuery } from '@tanstack/react-query';

import Loading from 'components/common/Loading';
import Error from 'components/common/Error';
import ProductItem from './Item';

import { getProducts } from 'apis/firebase';

const ProductList = () => {
  const {
    isLoading,
    error,
    data: products,
  } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
  });

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : error ? (
        <Error message={error.message} />
      ) : (
        <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {products?.map((product, index) => (
            <ProductItem
              key={`product-${index}-${product.id}`}
              product={product}
            />
          ))}
        </ul>
      )}
    </>
  );
};

export default ProductList;
