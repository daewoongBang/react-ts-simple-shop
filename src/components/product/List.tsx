import Loading from 'components/common/Loading';
import Error from 'components/common/Error';
import ProductItem from './Item';
import useProducts from 'hooks/useProducts';

const ProductList = () => {
  const {
    productsQuery: { isLoading, error, data: products },
  } = useProducts();

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : error ? (
        <Error message={error.message} />
      ) : (
        <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4'>
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
