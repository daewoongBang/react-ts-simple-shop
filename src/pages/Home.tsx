import Banner from 'components/common/Banner';
import ProductList from 'components/product/List';

const Home = () => {
  return (
    <div>
      <Banner
        imageUrl='/images/banners/main-banner.jpg'
        title='Welcome to Our Shop'
        subTitle='Best products, High quality, Affordable price'
      />

      <ProductList />
    </div>
  );
};

export default Home;
